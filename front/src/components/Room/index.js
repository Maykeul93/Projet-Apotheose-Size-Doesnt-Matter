import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { FaCopy } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classnames from 'classnames';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BsFillChatFill } from 'react-icons/bs';
import { RiChatDeleteFill } from 'react-icons/ri';
import { ImNotification } from 'react-icons/im';

import Header from 'containers/Header';
import PlayerWithAvatar from 'containers/PlayerWithAvatar';
import Chat from 'containers/Chat';
import LeaveGame from 'containers/Game/LeaveGame';
import PlayerCard from './PlayerCard';

import useWidthDimension from 'customHooks/screenSize';

import './style.scss';

import { timerPercent } from 'selectors/gameSelectors';

function Room({
    otherPlayers,
    room,
    launchGame,
    isLaunch,
    isCreator,
    isReady,
    sendIsReady,
    messages,
}) {
    const screenSize = useWidthDimension();
    const [playersReady, setPlayersReady] = useState(0);
    const [playersNumber, setPlayersNumber] = useState(0);
    const [displayChat, setDisplayChat] = useState(screenSize < 769 ? false : true);
    const [newMessage, setNewMessage] = useState(false);

    useEffect(() => {
        const numberReady = otherPlayers.filter((player) => player.isReady).length;
        setPlayersReady(numberReady + (isReady ? 1 : 0));
        setPlayersNumber(otherPlayers.length + 1);
    }, [otherPlayers, isReady]);

    useEffect(() => {
        if (screenSize < 769){
            setDisplayChat(false);
        }
        else {
            setDisplayChat(true);
        }
    }, [screenSize]);

    useEffect(() => {
        if(!newMessage) {
            setNewMessage(true);
        }
    }, [messages]);

    if(!room) {
        return <Redirect to="/page/createRoom" />
    }
    if (isLaunch) {
        const path = `/game/${room}`
        return (<Redirect to={path} />)
    }
    const successCopy = () => {
        toast.success('Lien copi??!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const handleClick = () => {
        setDisplayChat(!displayChat);
        if (newMessage) {
            setNewMessage(false);
        }
    };

    return (
        <>
            <Header />
            <main className="room game__main">
                <div className="room__left">
                    <PlayerWithAvatar />
                    <div className="room__left--launch">
                        {
                            isCreator && playersNumber === playersReady ? (
                                <button
                                    className="launchGame room__left--button"
                                    type="button"
                                    onClick={launchGame}
                                >
                                    Lancer la partie
                                </button>
                            ) : (
                                <button
                                    className={
                                        classnames(
                                            "room__left--button", {
                                                "isNotReady": isReady,
                                                "isReady": !isReady,
                                            }
                                        )
                                    }
                                    type="button"
                                    onClick={sendIsReady}
                                >
                                    {isReady ? 'Pas tout de suite!' : 'On y va!'}
                                </button>
                            )
                        }
                        
                        <div className="leaveButton__container room__left--button">
                            <LeaveGame
                                buttonContent={"Quitter le salon"}
                            />
                        </div>
                    </div>
                </div>
                <div className="room__right">
                    <div className="room__right--header">
                        {
                            screenSize > 768 && (
                                <div className={
                                    classnames(
                                        {
                                            "room__right--notReadyCounter": playersReady !== playersNumber,
                                            "room__right--readyCounter": playersReady === playersNumber,
                                        },
                                        "room__right--playersCounter"
                                    )
                                }>
                                    <CircularProgressbarWithChildren
                                        value={timerPercent(playersReady, playersNumber)}
                                        styles={{
                                            path: {
                                                stroke: `${ playersReady !== playersNumber ? 'rgb(170, 6, 6)' : 'rgb(0, 158, 13)'}`,
                                            },
                                            trail: {
                                                // Trail color
                                                stroke: '#fff',
                                            },
                                        }}
                                    >
                                        <span className="isReady__count">{playersReady}</span>
                                        <span className="isReady__sep">--</span>
                                        <span className="isReady__total">{playersNumber}</span>
                                    </CircularProgressbarWithChildren>
                                </div>
                            )
                        }
                        <div className="roomCode">
                            <h3 className="roomCode__content">
                                Code de la partie:
                                <span>{room}</span>
                            </h3>
                            <CopyToClipboard
                                text={room}
                                onCopy={successCopy}
                            >
                                <button
                                    className="roomCode__button room__left--button"
                                    type="button"
                                >
                                    <FaCopy size="25" color="white" />
                                </button>
                            </CopyToClipboard>
                            <ToastContainer
                                position="top-center"
                                autoClose={3000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                            />
                        </div>
                    </div>
                    <div className="room__right--playersList">
                        {
                            otherPlayers.map((player) => (
                                <PlayerCard
                                    key={player.id}
                                    player={player}
                                />
                            ))
                        }
                    </div>
                    <>
                        {
                            screenSize < 769 && (
                                <button
                                    type="button"
                                    className="room__right--chatButton"
                                    onClick={handleClick}
                                >
                                    <BsFillChatFill
                                        size="45"
                                        color="white"
                                    />
                                </button>
                            )
                        }
                        {
                            screenSize < 769 && newMessage && (
                                <button
                                    type="button"
                                    className="room__right--newMessage"
                                    onClick={handleClick}
                                >
                                    <ImNotification
                                        size="25"
                                        color="#AA0606"
                                    />
                                </button>
                            )
                        }
                        <div className={
                            classnames(
                                "room__right--chat",
                                {
                                    "room__right--chatIsClosed": !displayChat,
                                    "room__right--chatIsOpen": displayChat,
                                }
                            )
                        }>
                            <Chat />
                            {
                                screenSize < 769 && (
                                    <button
                                        type="button"
                                        className="room__right--closeChatButton"
                                        onClick={handleClick}
                                    >
                                        <RiChatDeleteFill
                                            size="35"
                                            color="white"
                                        />
                                    </button>
                                )
                            }
                        </div>   
                    </>
                </div>
            </main>
        </>
    );
}

Room.propTypes = {
    otherPlayers: PropTypes.array.isRequired,
    room: PropTypes.string.isRequired,
    launchGame: PropTypes.func.isRequired,
    isLaunch: PropTypes.bool.isRequired,
    isCreator: PropTypes.bool.isRequired,
    sendIsReady: PropTypes.func.isRequired,
    isReady: PropTypes.bool.isRequired,
    messages: PropTypes.array.isRequired,
};

export default Room;