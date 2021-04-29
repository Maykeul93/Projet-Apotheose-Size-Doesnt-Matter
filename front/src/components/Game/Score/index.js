import PropTypes from 'prop-types';
import classnames from 'classnames';

import avatars from 'styles/images/avatars';
import './styles.scss';

import { findIndexOfUserAvatar } from 'selectors/gameSelectors';

function Score({
    player,
    isOver,
    userId,
}) {
    const index = findIndexOfUserAvatar(player, avatars);

    return (
        <div className={
            classnames("score", {
                "score__user": isOver && player.id === userId,
            })
        }>
            {
                isOver && (
                    <div className={
                        classnames("score__avatar", {
                            "score__ownAvatar": player.id === userId,
                        })
                    }>
                        <img src={avatars[index].path} alt={`${avatars[index].name}`}/>
                    </div>
                )
            }
            <div
                className="score__pseudo"
                style={{
                    backgroundColor: avatars[index].color,
                }}
            >{player.pseudo}</div>
            <div className="score__points">
                { isOver && (
                    <span className="score__desc">Score : </span>
                )}
                <span className={
                    classnames({
                        "score__result": isOver,
                    })
                }>{player.score}</span>
            </div>
            {
                isOver && (
                    <div className="score__exactAnswers">
                        <span className="score__desc">Réponses exactes :</span>
                        <span className={
                            classnames({
                                "score__result": isOver,
                            })
                        }>{player.exactAnswer_count}</span>
                    </div>
                )
            }
        </div>
    );
}

Score.propTypes = {
    player: PropTypes.object.isRequired,
    isOver: PropTypes.bool.isRequired,
    userId: PropTypes.number.isRequired,
};

export default Score;