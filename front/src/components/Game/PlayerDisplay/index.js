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
    const index = findIndexOfUserAvatar(player, avatars);

    const answer = transformExactAnswerIntoExploitableAnswer(player.answer);
    const styleSpan = getPercentOfProgressBar(answer, exactAnswer);
    styleSpan.backgroundColor = avatars[index].color;

    const classNamesItem = classnames('playerDisplay', {'playerDisplay__user': userId === player.id});
 
    return (
        <div className={classNamesItem}>
            <div className='playerDisplay__progBar'>
                {/* Need the player answer to adapt progress bar */}
                <span
                    className="playerDisplay__progBar--full"
                    style={styleSpan}
                >
                    <div className="playerDisplay__avatar">
                        {/* player avatar import */}
                        <img src={avatars[index].path} alt={`user's avatar : ${avatars[index].name}`}/>
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