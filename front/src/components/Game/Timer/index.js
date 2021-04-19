import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Timmer({
    isRound,
    setRound,
    isLaunch,
    startTimer,
}) {
    const [seconds, setSeconds] = useState(isRound ? 30 : 15);
    
    useEffect(() => {
        if (startTimer) {
            if (seconds === 0) {
                setRound(!isRound);
            }
            const timer = 
            seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
            return () => clearInterval(timer);
        }
    });

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
    setRound: PropTypes.func.isRequired,
    isLaunch: PropTypes.bool.isRequired,
    startTimer: PropTypes.bool.isRequired,
};

export default Timmer;