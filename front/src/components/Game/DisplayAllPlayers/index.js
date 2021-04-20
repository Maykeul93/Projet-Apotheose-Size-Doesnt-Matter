import React from 'react';
import PropTypes from 'prop-types';

import PlayerDisplay from './../PlayerDisplay';

import './style.scss';

import { placeUserintoTheMiddleOfOtherPlayers } from 'selectors/gameSelectors';

function DisplayAllPlayers({ player, otherPlayers, questions, round }) {
    const index = round === 0 ? 0 : round - 1;

    const answer = questions.length > 0 ? questions[index].answer : 0;

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
                        exactAnswer={answer}
                    />
                ))
            }
        </div>
    );
}

DisplayAllPlayers.propTypes = {
    player: PropTypes.object.isRequired,
    otherPlayers: PropTypes.array.isRequired,
    questions: PropTypes.array.isRequired,
    round: PropTypes.number.isRequired,
};

export default DisplayAllPlayers;