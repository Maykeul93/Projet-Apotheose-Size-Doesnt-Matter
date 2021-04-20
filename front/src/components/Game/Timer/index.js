import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Timmer({
    isRound,
    setIsRound,
    setRound,
    resetAllPlayersAnswers,
}) {
    const [seconds, setSeconds] = useState(isRound ? 30 : 15);

    useEffect(() => {
        if (seconds === 0) {
            setIsRound(!isRound);
            if (isRound) {
                resetAllPlayersAnswers();
            }
            else {
                setRound();
            }
        }
        const timer = 
        seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
        return () => clearInterval(timer);
    }, [seconds]);

    useEffect(() => {
        setSeconds(isRound ? 30 : 15);
    }, [isRound]);

    return (
        <div className="timmer">
            <span className="timmer__value">{seconds}</span>
        </div>
    );
}

Timmer.propTypes = {
    isRound: PropTypes.bool.isRequired,
    setIsRound: PropTypes.func.isRequired,
    setRound: PropTypes.func.isRequired,
    resetAllPlayersAnswers: PropTypes.func.isRequired,
};

export default Timmer;