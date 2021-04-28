import React from 'react';
import PropTypes from 'prop-types';
import avatars from 'styles/images/avatars';
import './style.scss';

import { findIndexOfUserAvatar } from 'selectors/gameSelectors';

function Round({
    round,
    numberOfRounds,
    sendScore,
    userAvatar,
}) {
    const index = findIndexOfUserAvatar(userAvatar, avatars);
    if (round === numberOfRounds + 1) {
        sendScore();
    }
    return (
        <div className="round"
            style={{
                color: avatars[index].color,
            }}
        >
            <div className="round__value">{round} </div>
            <div className="round__separator">/</div>
            <div className="round__total"> {numberOfRounds}</div>
        </div>
    );
}

Round.propTypes = {
    round: PropTypes.number.isRequired,
    numberOfRounds: PropTypes.number.isRequired,
    sendScore: PropTypes.func.isRequired,
    userAvatar: PropTypes.object.isRequired,
}

export default Round;