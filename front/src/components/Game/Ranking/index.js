import React from 'react';
import PropTypes from 'prop-types';
import Score from './../Score';
import './style.scss';

function Ranking({player, otherPlayers}) {
    return (
        <div className="ranking">
            <h2 className="ranking__title">Ranking</h2>
            <div className="ranking__list">
                {/* Display user score in first position */}
                <Score player={player} />
                {/* then other players */}
                {
                    otherPlayers.map((player) => (
                        <Score
                            key={player.id}
                            player={player}
                        />
                    ))
                }
            </div>
        </div>
    );
}

Ranking.propTypes = {
    player: PropTypes.object.isRequired,
    otherPlayers: PropTypes.array.isRequired,
};

export default Ranking;