import PropTypes from 'prop-types';
import './styles.scss';


function PlayerDisplay({ player, exactAnswer }) {
    // Algo de calcul de la taille de la barre de progression
    return (
        <div className="playerDisplay">
            <div className="playerDisplay__pseudo">
                {player.pseudo}
            </div>
            <div className="playerDisplay__progBar">
                {/* Need the player answer to adapt progress bar */}
                <span className="playerDisplay__progBar--full" />
            </div>
            <div className="playerDisplay__avatar">
                {/* player avatar import */}
                Avatar
            </div>
        </div>
    );
}

PlayerDisplay.propTypes = {
    player: PropTypes.object.isRequired,
    exactAnswer: PropTypes.number.isRequired,
};

export default PlayerDisplay;