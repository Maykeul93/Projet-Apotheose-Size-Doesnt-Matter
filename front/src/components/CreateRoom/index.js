import PropTypes from 'prop-types';

import Rules from './Rules';
import './style.scss';

function CreateRoom({ inputValue, setInputValue }) {
    const generateRoom = () => {
        console.log('Je génère une room');
    };
    const joinRoom = (e) => {
        e.preventDefault();
        console.log('Je rejoins une partie existante');
    };
    return (
        <main className="createRoom page__main">
            <div className="createRoom__infos">
                <div className="createRoom__player">
                    <p>Pseudo</p>
                    <div className="createRoom__avatarChoice">
                        <button type="button">
                            &lt;
                        </button>
                            <img src="" alt=""/>
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
                    onClick={generateRoom}
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
            </div>
        </main>
    );
}

CreateRoom.propTypes = {
    inputValue: PropTypes.string.isRequired,
    setInputValue: PropTypes.func.isRequired,
};

export default CreateRoom;