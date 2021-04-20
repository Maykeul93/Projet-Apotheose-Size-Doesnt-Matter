import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from 'containers/Header';
import PlayerAnswer from 'containers/Game/PlayerAnswer';
import LeaveGame from 'containers/Game/LeaveGame';
import DisplayAllPlayers from 'containers/Game/DisplayAllPlayers';
import Ranking from 'containers/Game/Ranking';
import Timer from './Timer';
import Question from './Question';
import Round from './Round';

import './style.scss';

function Game({
    questions,
    isLaunch,
    resetAllPlayersAnswers,
}) {
    const [ allValues, setAllValues ] = useState({
        isRound: true,
        startTimer: true,
        round: 0,
        question: '',
        exactAnswer: 0,
    })
    // const [ isRound, setIsRound ] = useState(true);
    // const [ startTimer, setStartTimer ] = useState(true);
    // const [ round, setRound ] = useState(0);
    // const [ question, setQuestion ] = useState('');
    // const [ exactAnswer, setExactAnswer ] = useState('');

    const { isRound,
        startTimer,
        round,
        question,
        exactAnswer
    } = allValues;

    useEffect(() => {

        if (round === questions.length) {
            setAllValues({
                ...allValues,
                startTimer: false,
            });
        }
        if (startTimer) {
            if (isRound) {
                setAllValues({
                    ...allValues,
                    round: round + 1,
                    question: questions[round].content,
                    exactAnswer: questions[round].answer,
                })
                // setRound(round + 1);
                // setQuestion(questions[round].content);
                // setExactAnswer(questions[round].answer);
            }
            if (!isRound) {
                resetAllPlayersAnswers();
                // On incrémente les scores
            }
        }
    }, [isRound]);

    // When the user leaves the game, reset the state 'isLaunch' & redirect to the page of creation Room
    if (!isLaunch){
        return (<Redirect to="/page/createRoom" />);
    }

    console.log('question', question);
    console.log('exactAnswer', exactAnswer);
    console.log('round', round);
    return (
        <>
            {console.log('je render l app')}
            <Header />
            <div className="game game__main">
                <div className="game__left">
                    <div className="game__interface">
                        {/* Insertion composant pour afficher des messages Par dessus interface de jeu */}
                        {
                            startTimer && (
                                <>
                                    <Timer
                                        allValues={allValues}
                                        setRound={setAllValues}
                                        isLaunch={isLaunch}
                                        startTimer={startTimer}
                                    />
                                    <Question
                                        question={question}
                                    />
                                </>
                            )
                        }
                        <DisplayAllPlayers
                            exactAnswer={exactAnswer}
                        />
                        {
                            isRound && <PlayerAnswer />
                        }
                        <Round
                            round={round}
                            numberOfRounds={questions.length}
                        />
                    </div>
                    <div className="game__bottom">
                        <div className="game__tchat">
                            Tchat
                        </div>
                        <LeaveGame />
                    </div>
                </div>
                <Ranking />
            </div>
        </>
    );
}

Game.propTypes = {
    player: PropTypes.object.isRequired,
    otherPlayers: PropTypes.array.isRequired, // Need id, pseudo, answer, score, codeAvatar
    questions: PropTypes.array.isRequired,
    isLaunch: PropTypes.bool.isRequired,
    resetAllPlayersAnswers: PropTypes.func.isRequired,
};

Game.defaultProps = {
    numberOfRounds: 0,
}

export default Game;