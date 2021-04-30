import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { BsFillChatFill } from 'react-icons/bs';
import { ImNotification } from 'react-icons/im';
import { RiChatDeleteFill } from 'react-icons/ri';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Header from 'containers/Header';
import PlayerAnswer from 'containers/Game/PlayerAnswer';
import LeaveGame from 'containers/Game/LeaveGame';
import DisplayAllPlayers from 'containers/Game/DisplayAllPlayers';
import Ranking from 'containers/Game/Ranking';
import Timer from 'containers/Game/Timer';
import Question from 'containers/Game/Question';
import Round from 'containers/Game/Round';
import Chat from 'containers/Chat';

import useWidthDimension from 'customHooks/screenSize';

import './style.scss';

function Game({
    isLaunch,
    isOver,
    messages,
}) {
    const screenSize = useWidthDimension();
    const [ isRanked, setIsRanked ] = useState(false);
    const [ displayChat, setDisplayChat] = useState(screenSize < 769 ? false : true);
    const [newMessage, setNewMessage] = useState(false);

    useEffect(() => {
        if (screenSize < 769) {
            setDisplayChat(false);
        }
    }, [screenSize]);

    useEffect(() => {
        if(!newMessage) {
            setNewMessage(true);
        }
    }, [messages]);
    // When the user leaves the game, reset the state 'isLaunch' & redirect to the page of creation Room
    if (!isLaunch){
        return (<Redirect to="/page/createRoom" />);
    }

    const handleClick = () => {
        setDisplayChat(!displayChat);
        if (newMessage) {
            setNewMessage(false);
        }
    };

    return (
        <>
            <Header />
            <div className="game game__main">
                <div className="game__left">
                    <div className={classnames("game__interface", {
                        "game__interface--isOver": isOver,
                    })}>
                        {/* Insertion composant pour afficher des messages Par dessus interface de jeu */}
                        {
                            !isOver && (
                                <>
                                    <div className="game__interface--header">
                                        <Timer isRanked={isRanked} setIsRanked={setIsRanked} />
                                        <Question />
                                    </div>
                                    <div className="game__interface--main">
                                        <DisplayAllPlayers />
                                    </div>
                                    <div className="game__interface--footer">
                                        <PlayerAnswer />
                                        {/* Round Component set game is over at the end of the questions*/}
                                        <Round />
                                    </div>
                                </>
                            )
                        }
                        
                    </div>
                    {
                        screenSize < 769 && (
                            <button
                                type="button"
                                className="game__tchat--button"
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
                                className="game__newMessage"
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
                        classnames("game__bottom", {
                            "game__bottom--isOpen": displayChat,
                            "game__bottom--isClosed": !displayChat,
                        })
                    }>
                        <div className="game__tchat">
                            {
                                screenSize < 769 && (
                                    <button
                                        type="button"
                                        className="game__closeChatButton"
                                        onClick={handleClick}
                                    >
                                        <RiChatDeleteFill
                                            size="35"
                                            color="white"
                                        />
                                    </button>
                                )
                            }
                            <Chat />
                        </div>
                    </div>
                </div>
                <div className={
                    classnames("game__right", {
                        "game__right--isOver": isOver,
                    })
                }>
                    <Ranking
                        setIsRanked={setIsRanked}
                        isOver={isOver}
                    />
                    <div className="game__leaveGame">
                        <LeaveGame
                            buttonContent={"Quitter la partie"}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

Game.propTypes = {
    isOver: PropTypes.bool.isRequired,
    isLaunch: PropTypes.bool.isRequired,
    messages: PropTypes.array.isRequired,
};

export default Game;