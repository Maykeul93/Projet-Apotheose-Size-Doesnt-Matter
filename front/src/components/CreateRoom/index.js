import PropTypes from 'prop-types';
import './style.scss';

function CreateRoom() {
    return (
        <main className="createRoom">
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
            <div className="createRoom__rules">
                Règles du jeu:
            </div>
            <div className="createRoom__interactions">
                <button
                    className="create"
                    type="button"
                >
                    Créer une partie
                </button>
                <button className="join">
                    Rejoindre une partie
                </button>
                <input
                    type="text"
                    className="roomCode"
                />
            </div>
        </main>
    );
}

CreateRoom.propTypes = {

};

export default CreateRoom;