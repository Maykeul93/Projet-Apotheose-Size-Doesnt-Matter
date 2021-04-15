import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function LeaveGame({ leaveGame }) {
    return (
        <button
            className="leaveGame"
            type="button"
            onClick={leaveGame}
        >
            LeaveGame
        </button>
    );
}

LeaveGame.propTypes = {
    leaveGame: PropTypes.func.isRequired,
};

export default LeaveGame;