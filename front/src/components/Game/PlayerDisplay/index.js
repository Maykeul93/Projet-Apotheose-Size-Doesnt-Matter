import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


function PlayerDisplay({ player, exactAnswer }) {
    // Algo de calcul de la taille de la barre de progression
    const getPercentOfProgressBar = () => {
        const playerAnswer = Number(player.answer);

        if (!isNaN(playerAnswer)){
            const percent = (playerAnswer * 100) / exactAnswer;
            const style = {
                height: percent.toFixed(2) + '%',
            }
            return style;
        }
        else {
            // Display an error
        }
    };
    const styleSpan = getPercentOfProgressBar();
    console.log(player.pseudo, styleSpan);

    // Add verification to compare pseudo with pseudo user of the state
    // If is equal, add special css to display progress bar bigger 
    return (
        <div className="playerDisplay">
            <div className="playerDisplay__pseudo">
                {player.pseudo}
            </div>
            <div className="playerDisplay__progBar">
                {/* Need the player answer to adapt progress bar */}
                <span
                    className="playerDisplay__progBar--full"
                    style={styleSpan}
                />
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