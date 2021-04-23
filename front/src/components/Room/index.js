import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Header from 'containers/Header';
import PlayerWithAvatar from 'components/PlayerWithAvatar';
import Chat from 'containers/Chat';

import './style.scss';

function Room({
    otherPlayers,
    room,
    launchGame,
    isLaunch,
    user,
}) {
    if (isLaunch) {
        const path = `/game/${room}`
        return (<Redirect to={path} />)
    }
    const handleClick = () => {
        launchGame();
    };
    return (
        <>
            <Header />
            <main className="room game__main">
                <div className="room__left">
                    <PlayerWithAvatar user={user} />
                    <div className="room__left--launch">
                        {/* Need to implement a verification to authorize only the game master to launch game*/}
                        <button
                            className="launchGame"
                            type="button"
                            onClick={handleClick}
                        >
                            Lancer la partie
                        </button>
                        <h3 className="roomCode">Code de la partie: {room}</h3>
                    </div>
                </div>
                <div className="room__right">
                    <div className="room__right--playersList">
                        {
                            otherPlayers.map((player) => (<h2 key={player.id}>{player.pseudo}</h2>))
                        }
                    </div>
                    <Chat />
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
    user: PropTypes.object.isRequired,
};

export default Room;