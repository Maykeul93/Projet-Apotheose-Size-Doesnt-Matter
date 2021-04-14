import PropTypes from 'prop-types';

import Rules from './Rules';
import './style.scss';

function CreateRoom() {
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
                >
                    Créer une partie
                </button>
                <form className="joinForm">
                    <button className="join">
                        Rejoindre une partie
                    </button>
                    <input
                        type="text"
                        className="roomCode"
                        placeholder="code de la partie à rejoindre"
                    />
                </form>
            </div>
        </main>
    );
}

CreateRoom.propTypes = {

};

export default CreateRoom;