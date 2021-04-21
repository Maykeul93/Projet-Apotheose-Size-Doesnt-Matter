import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Timmer({
    isRound,
    setIsRound,
    setRound,
    resetAllPlayersAnswers,
    isRanked,
    setIsRanked,
}) {
    const [seconds, setSeconds] = useState(isRound ? 30 : 15);

    useEffect(() => {
        if (seconds === 0) {
            // When Timer comes to 0, change the state of isRound to specify there is no question to display
            setIsRound(!isRound);
            if (!isRound) {
                // If it is the end of the break, increments the round & reset all players answers
                setRound();
            }
            if (!isRound && isRanked){
                // If we are at the end of a question, reset all answers to put all progres bar down
                resetAllPlayersAnswers();
                setIsRanked(false);
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
    isRanked: PropTypes.bool.isRequired,
    setIsRanked: PropTypes.func.isRequired,
};

export default Timmer;