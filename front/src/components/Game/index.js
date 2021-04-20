import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from 'containers/Header';
import PlayerAnswer from 'containers/Game/PlayerAnswer';
import LeaveGame from 'containers/Game/LeaveGame';
import DisplayAllPlayers from './DisplayAllPlayers';
import Timer from './Timer';
import Ranking from './Ranking';
import Question from './Question';
import Round from './Round';

import './style.scss';

function Game({
    player,
    otherPlayers,
    questions,
    isLaunch,
    resetAllPlayersAnswers,
}) {
    const [ isRound, setIsRound ] = useState(true);
    const [ startTimer, setStartTimer ] = useState(true);
    const [ round, setRound ] = useState(0);
    const [ question, setQuestion ] = useState('');
    const [ exactAnswer, setExactAnswer ] = useState('');

    console.log(otherPlayers);
    console.log(exactAnswer);

    useEffect(() => {

        if (round === questions.length) {
            setStartTimer(false);
        }
        if (startTimer) {
            if (isRound) {
                setRound(round + 1);
                setQuestion(questions[round].content);
                setExactAnswer(questions[round].answer);
            }
            if (!isRound) {
                resetAllPlayersAnswers();
                // On incrémente les scores
            }
        }
    }, [isRound]);
    const playerUser = { // Only for the demo
        ...player,
        avatar: 'avatar.png',
    }

    // When the user leaves the game, reset the state 'isLaunch' & redirect to the page of creation Room
    if (!isLaunch){
        return (<Redirect to="/page/createRoom" />);
    }
    // Display user in the middle

    // Get the length of the array to insert a new element in the middle
    const middleOfPlayers = Math.round(otherPlayers.length / 2);

    // Insert the user into the other players in the middle
    const displayedPlayers = [...otherPlayers];
    displayedPlayers.splice(middleOfPlayers, 0, playerUser);

    // Start the game after a few seconds to let a delay for all players to prepare themselves
    // Fonction pour commencer le jeu apres un délai de 5 secondes
    

    return (
        <>
        { console.log('je render le composant principal')}
            <Header />
            <div className="game game__main">
                <div className="game__left">
                    <div className="game__interface">
                        {/* Insertion composant pour afficher des messages Par dessus interface de jeu */}
                        {
                            startTimer && (
                                <>
                                    <Timer
                                        isRound={isRound}
                                        setRound={setIsRound}
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
                            displayedPlayers={displayedPlayers}
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
                <Ranking
                    player={playerUser}
                    otherPlayers={otherPlayers}
                />
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