import PropTypes from 'prop-types';

function Score({ player }) {
    return (
        <div className="score">
            <div className="score__pseudo">{player.pseudo}</div>
            <div className="score__points">Score</div>
        </div>
    );
}

Score.propTypes = {
    player: PropTypes.object.isRequired,
};

export default Score;