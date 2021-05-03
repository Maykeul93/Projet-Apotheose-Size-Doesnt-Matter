import { useState, useEffect } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import avatars from 'styles/images/avatars';
import './style.scss';

import {
    findIndexOfUserAvatar,
    timerPercent,
} from 'selectors/gameSelectors';

function Timmer({
    isRound,
    setIsRound,
    setRound,
    resetAllPlayersAnswers,
    isRanked,
    setIsRanked,
    userAvatar,
}) {
    const [seconds, setSeconds] = useState(isRound ? 30 : 10);
    const [secondMax, setSecondMax] = useState(isRound? 30 : 10);

    const index = findIndexOfUserAvatar(userAvatar, avatars);

    useEffect(() => {
        if (seconds === 0) {
            // When Timer comes to 0, change the state of isRound to specify there is no question to display
            setIsRound();
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
        setSeconds(isRound ? 30 : 10);
        setSecondMax(isRound ? 30 : 10);
    }, [isRound]);

    return (
        <div className="timer">
            <CircularProgressbarWithChildren
                value={timerPercent(seconds, secondMax)}
                styles={{
                    path: {
                        stroke: avatars[index].color,
                    },
                    trail: {
                        // Trail color
                        stroke: '#fff',
                      },
                }}
            >
                <span
                    className={
                        classnames(
                            "timer__value",
                            {
                                "timer__urgent": seconds < 5 && seconds > 2,
                                "timer__dangerous": seconds <= 2, 
                            }
                        )
                    }
                    style={{color: avatars[index].color}}
                >
                    {seconds}
                </span>
            </CircularProgressbarWithChildren>
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
    userAvatar: PropTypes.object.isRequired,
};

export default Timmer;