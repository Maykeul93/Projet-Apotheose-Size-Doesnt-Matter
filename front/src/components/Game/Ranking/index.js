import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Score from './../Score';
import './style.scss';

import {
    selectClosestPlayersAtTheEndOfARound,
    setScoreAtTheEndOfARound,
} from 'selectors/gameSelectors';

function Ranking({
    player,
    otherPlayers,
    exactAnswer,
    isRound,
    round,
    setIsRanked,
    score,
    setScore,
    isOver,
}) {
    useEffect(() => {
        setScore([player, ...otherPlayers].map((player) => ({
            ...player,
            score: 0,
            exactAnswer_count: 0,
        })));
    }, []);
    // Quand bascule sur une pause --> attribue les score puis setIsRanked a true
    useEffect(() => {
        if (!isRound && round > 0) {
            // j'attribue les score
            const winners = selectClosestPlayersAtTheEndOfARound(player, otherPlayers, exactAnswer);
            console.log(winners);
            const newScore = setScoreAtTheEndOfARound(winners, score, exactAnswer);
            setScore(newScore);
            console.log(newScore);
            setIsRanked(true);
            // je setIsRanked a true
        }
    }, [isRound]);
    return (
        <div className="ranking">
            <h2 className="ranking__title">Score</h2>
            <div className={
                classnames({
                    "ranking__list": !isOver,
                    "ranking__list--isOver": isOver,
                })
            }>
                {
                    score.map((player) => (
                        <Score
                            key={player.id}
                            player={player}
                            isOver={isOver}
                            userId={player.id}
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
    score: PropTypes.array.isRequired,
    setScore: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
};

export default Ranking;