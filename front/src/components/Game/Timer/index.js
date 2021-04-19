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
        let timeout;
        if (startTimer) {
            if (!isLaunch) {
                return () => {
                    clearTimeout(timeout);
                }
            }

            timeout = setTimeout(() => {
                setSeconds(seconds - 1) 
            }, 1000);

    
            if (seconds === 0) {
                setRound(!isRound);
                return () => {
                    clearTimeout(timeout);

                }
            }
        }
        
        return () => {
            clearTimeout(timeout)
            console.log('je clear le timeout')
        };

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