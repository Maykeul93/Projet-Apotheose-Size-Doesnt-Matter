import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Score from './../Score';
import './style.scss';

import { attributePointsAtTheEndOfARound } from 'selectors/gameSelectors';

function Ranking({
    player,
    otherPlayers,
    exactAnswer,
    isRound,
    round,
    setIsRanked,
}) {
    const [ score, setScore ] = useState([]);

    useEffect(() => {
        setScore([player, ...otherPlayers].map((player) => ({
            ...player,
            score: 0,
            exactAnswer_count: 0,
        })));
    }, []);
    // Quand bascule sur une pause --> attribue les score puis setIsRanked a true
    if (!isRound && round > 0) {
        console.log(score);
        // j'attribue les score
        const newScore = attributePointsAtTheEndOfARound(player, otherPlayers, exactAnswer, score);
        setIsRanked(true);
        // je setIsRanked a true
    }
    return (
        <div className="ranking">
            <h2 className="ranking__title">Ranking</h2>
            <div className="ranking__list">
                {
                    score.map((player) => (
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
    exactAnswer: PropTypes.number.isRequired,
    isRound: PropTypes.bool.isRequired,
    round: PropTypes.number.isRequired,
    setIsRanked: PropTypes.func.isRequired,
};

export default Ranking;