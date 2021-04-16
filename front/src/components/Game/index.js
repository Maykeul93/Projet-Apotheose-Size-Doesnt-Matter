import { useState } from 'react';
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
}) {
    const playerUser = { // Only for the demo
        ...player,
        id: 8,
        avatar: 'avatar.png',
    }

    // Display user in the middle

    // Get the length of the array to insert a new element in the middle
    const middleOfPlayers = Math.round(otherPlayers.length / 2);

    // Insert the user into the other players in the middle
    const displayedPlayers = [...otherPlayers];
    displayedPlayers.splice(middleOfPlayers, 0, playerUser);

    return (
        <>
            <Header />
            <div className="game game__main">
                <div className="game__left">
                    <div className="game__interface">
                        <Timer
                            isRound={isRound}
                            setRound={setRound}
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
};

export default Game;