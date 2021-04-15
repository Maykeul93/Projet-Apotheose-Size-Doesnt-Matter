import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import classname from 'classnames';

import Rules from './Rules';
import './style.scss';

function CreateRoom({
    inputValue,
    setInputValue,
    createGame,
    joinGame,
    room,
}) {
    const [ error, setError ] = useState(false);
    
    if (room) {
        const path = `/room/${room}`
        return (<Redirect to={path} />)
    }

    const classnameError = classname('error', {'is-hidden': !error});

    const joinRoom = (e) => {
        e.preventDefault();
        if (inputValue) {
            joinGame(inputValue);
        }
        else {
            // if there is no code room, displayed the error & remove it 3seconds later
            setError(true);
            setTimeout(() => setError(false), 3000);
        }
    };
    return (
        <main className="createRoom page__main">
            <div className="createRoom__infos">
                <div className="createRoom__player">
                    <h2>Pseudo</h2>
                    <div className="createRoom__avatarChoice">
                        <button type="button">
                            &lt;
                        </button>
                        <div className="createRoom__avatarChoice--img">
                            {/* Here place the img of the avatar */}
                            Avatar
                        </div>
                        <button type="button">
                            &gt;
                        </button>
                    </div>
                </div>
                <Rules />
            </div>
            <div className="createRoom__interactions">
                <button
                    className="create"
                    type="button"
                    onClick={createGame}
                >
                    Créer une partie
                </button>
                <form className="joinForm">
                    <button
                        className="join"
                        onClick={joinRoom}
                    >
                        Rejoindre une partie
                    </button>
                    <input
                        type="text"
                        className="roomCode"
                        placeholder="code de la partie à rejoindre"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </form>
                {
                    error ? (
                    <div className={classnameError}>
                        Il faut entrer un code de partie pour rejoindre une partie!
                    </div>) : (<></>)
                }
            </div>
        </main>
    );
}

CreateRoom.propTypes = {
    inputValue: PropTypes.string.isRequired,
    setInputValue: PropTypes.func.isRequired,
    createGame: PropTypes.func.isRequired,
    joinGame: PropTypes.func.isRequired,
    room: PropTypes.string.isRequired,
};

export default CreateRoom;