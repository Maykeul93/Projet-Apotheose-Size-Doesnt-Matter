import { useState } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';

import './style.scss';

function UserInteractions({
    inputValue,
    setInputValue,
    createGame,
    joinGame,
}) {
    const [ error, setError ] = useState(false);

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
        <div className="interactions">
            <button
                className="interactions__create"
                type="button"
                onClick={createGame}
            >
                Créer une partie
            </button>
            <form className="interactions__joinForm">
                <button
                    className="interactions__joinForm--join"
                    onClick={joinRoom}
                >
                    Rejoindre une partie
                </button>
                <input
                    type="text"
                    className="interactions__joinForm--roomCode"
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
    );
}

UserInteractions.propTypes = {

};

export default UserInteractions;