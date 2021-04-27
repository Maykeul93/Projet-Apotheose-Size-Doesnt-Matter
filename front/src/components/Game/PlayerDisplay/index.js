import PropTypes from 'prop-types';
import avatars from 'styles/images/avatars';
import { findIndexOfUserAvatar } from 'selectors/gameSelectors';

import {
    getPercentOfProgressBar,
    transformExactAnswerIntoExploitableAnswer,
} from 'selectors/gameSelectors';

import './styles.scss';


function PlayerDisplay({ player, exactAnswer }) {
    const index = findIndexOfUserAvatar(player, avatars);

    const answer = transformExactAnswerIntoExploitableAnswer(player.answer);
    const styleSpan = getPercentOfProgressBar(answer, exactAnswer);

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
                <img src={avatars[index].path} alt={`user's avatar : ${avatars[index].name}`}/>
            </div>
        </div>
    );
}

PlayerDisplay.propTypes = {
    player: PropTypes.object.isRequired,
    exactAnswer: PropTypes.number.isRequired,
};

export default PlayerDisplay;