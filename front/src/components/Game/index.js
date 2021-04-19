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
    isRound,
    setRound,
    questions,
    numberOfRounds,
    isLaunch,
}) {
    const playerUser = { // Only for the demo
        ...player,
        avatar: 'avatar.png',
    }

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
            <Header />
            <div className="game game__main">
                <div className="game__left">
                    <div className="game__interface">
                        {/* Insertion composant pour afficher des messages Par dessus interface de jeu */}
                        <Timer
                            isRound={isRound}
                            setRound={setRound}
                            isLaunch={isLaunch}
                        />
                        <Question />
                        <DisplayAllPlayers displayedPlayers={displayedPlayers} />
                        <PlayerAnswer />
                        <Round />
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
    isRound: PropTypes.bool.isRequired,
    setRound: PropTypes.func.isRequired,
    questions: PropTypes.array.isRequired,
    numberOfRounds: PropTypes.number,
    isLaunch: PropTypes.bool.isRequired,
};

Game.defaultProps = {
    numberOfRounds: 0,
}

export default Game;