import PropTypes from 'prop-types';
import avatars from 'styles/images/avatars';
import './styles.scss';

import { findIndexOfUserAvatar } from 'selectors/gameSelectors';

function Score({ player }) {
    const index = findIndexOfUserAvatar(player, avatars);

    return (
        <div className="score">
            <div
                className="score__pseudo"
                style={{
                    backgroundColor: avatars[index].color,
                }}
            >{player.pseudo}</div>
            <div className="score__points">{player.score}</div>
        </div>
    );
}

Score.propTypes = {
    player: PropTypes.object.isRequired,
};

export default Score;