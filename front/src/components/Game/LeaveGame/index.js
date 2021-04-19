import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

function LeaveGame({ leaveGame }) {
    let history = useHistory();
    const handleClick = () => {
        history.push('/page/createRoom');
        leaveGame();
    };
    return (
        <button
            className="leaveGame"
            type="button"
            onClick={handleClick}
        >
            LeaveGame
        </button>
    );
}

LeaveGame.propTypes = {
    leaveGame: PropTypes.func.isRequired,
};

export default LeaveGame;