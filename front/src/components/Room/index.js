import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Header from 'containers/Header';
import PlayerWithAvatar from 'containers/PlayerWithAvatar';

import './style.scss';

function Room({
    player,
    otherPlayers,
    room,
    launchGame,
    isLaunch,
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
                    <PlayerWithAvatar />
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
                    <div className="room__right--tchat">
                        Tchat
                    </div>
                </div>
            </main>
        </>
    );
}

Room.propTypes = {
    player: PropTypes.string.isRequired, // just for the demo, in fact we will receive an object
    otherPlayers: PropTypes.array.isRequired,
    room: PropTypes.string.isRequired,
    launchGame: PropTypes.func.isRequired,
    isLaunch: PropTypes.bool.isRequired,
};

export default Room;