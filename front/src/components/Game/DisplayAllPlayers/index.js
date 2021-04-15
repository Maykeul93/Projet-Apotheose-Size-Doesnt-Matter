import React from 'react';
import PropTypes from 'prop-types';

import PlayerDisplay from './../PlayerDisplay';

import './style.scss';

function DisplayAllPlayers({ displayedPlayers }) {
    return (
        <div className="players">
            {/* List of players, need to place user in the middle */}
            {/* Need to receive pseudo, avatar, answer, id, exact_answer */}
            {
                displayedPlayers.map((player) => (
                    <PlayerDisplay
                        key={player.id}
                        player={player}
                        exactAnswer={12} // For the test
                    />
                ))
            }
        </div>
    );
}

DisplayAllPlayers.propTypes = {
    displayedPlayers: PropTypes.array.isRequired,
};

export default DisplayAllPlayers;