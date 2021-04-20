import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Timmer({
    allValues,
    setRound,
    startTimer,
}) {
    const { isRound } = allValues;
    const [seconds, setSeconds] = useState(isRound ? 30 : 15);
    
    useEffect(() => {
        if (startTimer) {
            if (seconds === 0) {
                setRound({
                    ...allValues,
                    isRound: !isRound
                });
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
    allValues: PropTypes.object.isRequired,
    setRound: PropTypes.func.isRequired,
    isLaunch: PropTypes.bool.isRequired,
    startTimer: PropTypes.bool.isRequired,
};

export default Timmer;