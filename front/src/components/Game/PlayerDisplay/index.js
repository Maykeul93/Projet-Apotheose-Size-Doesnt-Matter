import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import avatars from 'styles/images/avatars';
import { findIndexOfUserAvatar } from 'selectors/gameSelectors';

import {
    getPercentOfProgressBar,
    transformExactAnswerIntoExploitableAnswer,
} from 'selectors/gameSelectors';

import './styles.scss';


function PlayerDisplay({
    player,
    exactAnswer,
    userId,
}) {
    const answer = transformExactAnswerIntoExploitableAnswer(player.answer);
    const [percent, setPercent] = useState(getPercentOfProgressBar(answer, exactAnswer))
    const index = findIndexOfUserAvatar(player, avatars);

    console.log(percent);
    useEffect(() => {
        setPercent(getPercentOfProgressBar(answer, exactAnswer))
    }, [player]);
    
    const styleSpan = {height: `${percent}%`};
    styleSpan.backgroundColor = avatars[index].color;

    const classNamesItem = classnames('playerDisplay', {'playerDisplay__user': userId === player.id});
 
    return (
        <div className={classNamesItem}>
            <div className={
                classnames("playerDisplay__info", {
                    "playerDisplay__info--isDisplay": percent > 100,
                    "playerDisplay__info--isHidden": percent < 100,
                })
            }>
                C'est moins!!
            </div>
            <div className='playerDisplay__progBar'>
                {/* Need the player answer to adapt progress bar */}
                <span
                    className="playerDisplay__progBar--full"
                    style={styleSpan}
                >
                    <div className="playerDisplay__avatar">
                        {/* player avatar import */}
                        <img src={avatars[index].gamePath} alt={`user's avatar : ${avatars[index].name}`}/>
                    </div>
                </span>
            </div>
            <div
                className="playerDisplay__pseudo"
                style={{backgroundColor: avatars[index].color}}
            >
                {player.pseudo}
            </div>
        </div>
    );
}

PlayerDisplay.propTypes = {
    player: PropTypes.object.isRequired,
    exactAnswer: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
};

export default PlayerDisplay;