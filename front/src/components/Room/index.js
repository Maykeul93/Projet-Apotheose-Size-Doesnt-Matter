import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Header from 'containers/Header';
import PlayerWithAvatar from 'containers/PlayerWithAvatar';
import Chat from 'containers/Chat';
import LeaveGame from 'containers/Game/LeaveGame';

import './style.scss';

function Room({
    otherPlayers,
    room,
    launchGame,
    isLaunch,
}) {
    if(!room) {
        return <Redirect to="/page/createRoom" />
    }
    if (isLaunch) {
        const path = `/game/${room}`
        return (<Redirect to={path} />)
    }
    return (
        <>
            <Header />
            <main className="room game__main">
                <div className="room__left">
                    <PlayerWithAvatar />
                    <div className="room__left--launch">
                        {/* Need to implement a verification to authorize only the game master to launch game*/}
                        <button
                            className="launchGame"
                            type="button"
                            onClick={launchGame}
                        >
                            Lancer la partie
                        </button>
                        <h3 className="roomCode">Code de la partie: {room}</h3>
                        <LeaveGame
                            buttonContent={"Quitter le salon"}
                        />
                    </div>
                </div>
                <div className="room__right">
                    <div className="room__right--playersList">
                        {
                            otherPlayers.map((player) => (<h2 key={player.id}>{player.pseudo}</h2>))
                        }
                    </div>
                    <div className="room__right--chat">
                        <Chat />
                    </div>
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
};

export default Room;