import PropTypes from 'prop-types';
import classname from 'classnames';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './style.scss';

function UserInteractions({
    inputValue,
    setInputValue,
    createGame,
    joinGame,
}) {
    const joinRoom = (e) => {
        e.preventDefault();
        if (inputValue) {
            joinGame(inputValue);
        }
        else {
            // if there is no code room, displayed the error & remove it 3seconds later
            toast.error('Vous devez entrer un code de partie avant de cliquer sur le bouton "Rejoindre"!', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            
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
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

UserInteractions.propTypes = {
    inputValue: PropTypes.string.isRequired,
    setInputValue: PropTypes.func.isRequired,
    createGame: PropTypes.func.isRequired,
    joinGame: PropTypes.func.isRequired,
};

export default UserInteractions;