import PropTypes from 'prop-types';

function PlayerDisplay({ player }) {
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
            </div>
        </div>
    );
}

PlayerDisplay.propTypes = {
    player: PropTypes.object.isRequired,
};

export default PlayerDisplay;