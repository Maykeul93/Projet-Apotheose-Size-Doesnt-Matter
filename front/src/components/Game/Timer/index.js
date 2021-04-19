import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Timmer({
    isRound,
    setRound,
}) {
    const [seconds, setSeconds] = useState(isRound ? 30 : 15);
    const [ startTimer, setStartTimer ] = useState(true);
    
    useEffect(() => {
        let timeout;
        if (startTimer) {
            timeout = setTimeout(() => {
                setSeconds(seconds - 1) 
            }, 1000);
        }

        if (seconds === 0) {
            setRound();
            setStartTimer(false);
            return () => {
                clearTimeout(timeout);
            }
        }
    }, [seconds]);

    useEffect(() => {
        setStartTimer(true);
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
};

export default Timmer;