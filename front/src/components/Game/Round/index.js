import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Round({ round, numberOfRounds, setIsOver}) {
    if (round === numberOfRounds) {
        setIsOver();
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
    setIsOver: PropTypes.func.isRequired,
}

export default Round;