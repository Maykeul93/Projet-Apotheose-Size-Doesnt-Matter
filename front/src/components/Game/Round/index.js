import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Round({
    round,
    numberOfRounds,
    sendScore
}) {
    if (round === numberOfRounds + 1) {
        sendScore();
    }
    return (
        <div className="round">
            <span className="round__value">{round} / {numberOfRounds}</span>
        </div>
    );
}

Round.propTypes = {
    round: PropTypes.number.isRequired,
    numberOfRounds: PropTypes.number.isRequired,
    sendScore: PropTypes.func.isRequired,
}

export default Round;