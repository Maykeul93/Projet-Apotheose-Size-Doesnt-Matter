import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

function LeaveGame({ leaveGame, buttonContent }) {
    let history = useHistory();
    const page = history.location.pathname.split('/')[1];
    const handleClick = () => {
        history.push('/page/createRoom');
        leaveGame(page);
    };

    return (
        <button
            className="leaveGame"
            type="button"
            onClick={handleClick}
        >
            {buttonContent}
        </button>
    );
}

LeaveGame.propTypes = {
    leaveGame: PropTypes.func.isRequired,
    buttonContent: PropTypes.string.isRequired,
};

export default LeaveGame;