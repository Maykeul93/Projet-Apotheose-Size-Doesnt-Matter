import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

function LeaveGame({ leaveGame, buttonContent, width }) {
    let history = useHistory();
    const handleClick = () => {
        history.push('/page/createRoom');
        leaveGame();
    };

    const buttonStyles = {
        width,
    };

    return (
        <button
            className="leaveGame"
            type="button"
            onClick={handleClick}
            style={buttonStyles}
        >
            {buttonContent}
        </button>
    );
}

LeaveGame.propTypes = {
    leaveGame: PropTypes.func.isRequired,
    buttonContent: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
};

export default LeaveGame;