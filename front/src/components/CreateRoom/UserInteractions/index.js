import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import useWidthDimension from 'customHooks/screenSize';
import 'react-toastify/dist/ReactToastify.css';

import './style.scss';

function UserInteractions({
    inputValue,
    setInputValue,
    createGame,
    joinGame,
    resetRoomError,
    roomError,
}) {
    const screenWidth = useWidthDimension();

    useEffect(() => {
        if (roomError) {
            toast.error(roomError, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            resetRoomError();
        }
    }, [roomError]);

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
                className="interactions__create interactions__button"
                type="button"
                onClick={createGame}
            >
                Créer une partie
            </button>
            {
                screenWidth < 769 && (
                    <>
                        <h3 className="interactions__or">OU</h3>
                    </>
                )
            }
            <form className="interactions__joinForm">
                <button
                    className="interactions__joinForm--join interactions__button"
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
                    onFocus={(e) => e.target.placeholder = ''}
                    onBlur={(e) => e.target.placeholder = "code de la partie à rejoindre"}
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
    resetRoomError: PropTypes.func.isRequired,
    roomError: PropTypes.string,
};

UserInteractions.defaultProps = {
    roomError: null,
}

export default UserInteractions;