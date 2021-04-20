import React from 'react';
import PropTypes from 'prop-types';

import PlayerDisplay from './../PlayerDisplay';

import './style.scss';

import { placeUserintoTheMiddleOfOtherPlayers } from 'selectors/gameSelectors';

function DisplayAllPlayers({ player, otherPlayers, exactAnswer }) {
    const isNumberAnswer = Number(exactAnswer);

    const displayedPlayers = placeUserintoTheMiddleOfOtherPlayers(player, otherPlayers);
    return (
        <div className="players">
            {/* List of players, need to place user in the middle */}
            {/* Need to receive pseudo, avatar, answer, id, exact_answer */}
            {
                displayedPlayers.map((player) => (
                    <PlayerDisplay
                        key={player.id}
                        player={player}
                        exactAnswer={isNumberAnswer}
                    />
                ))
            }
        </div>
    );
}

DisplayAllPlayers.propTypes = {
    player: PropTypes.object.isRequired,
    otherPlayers: PropTypes.array.isRequired,
    exactAnswer: PropTypes.string.isRequired,
};

export default DisplayAllPlayers;