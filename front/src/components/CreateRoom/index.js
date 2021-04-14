import PropTypes from 'prop-types';
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
                <div className="createRoom__rules">
                    <h2>Règles du jeu:</h2>
                    <ul>
                        <li>Le but du jeu est de se rapprocher au plus de la réponse réelle de la question.</li>
                        <li>Plus vous êtes proche, plus vous marquez de points!</li>
                        <li>Si vous trouvez la réponse exacte, vous gagnerez un bonus de points!</li>
                    </ul>
                    <p>Amusez vous bien !!! :D</p>
                </div>
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