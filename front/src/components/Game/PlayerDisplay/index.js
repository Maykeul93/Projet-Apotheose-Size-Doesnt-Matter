import React from 'react';
import PropTypes from 'prop-types';

import { getPercentOfProgressBar } from 'selectors/gameSelectors';

import './styles.scss';


function PlayerDisplay({ player, exactAnswer }) {
    
    const styleSpan = getPercentOfProgressBar(player.answer, exactAnswer);

    //TODO Add verification to compare pseudo with pseudo user of the state
    //TODO  If is equal, add special css to display progress bar bigger 
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