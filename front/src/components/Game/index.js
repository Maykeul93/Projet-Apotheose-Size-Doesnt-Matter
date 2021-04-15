import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import Score from './Score';
import PlayerDisplay from './PlayerDisplay';
import './style.scss';

function Game({
    player,
    otherPlayers,
    inputValue,
    changeInputValue,
}) {
    const playerUser = { // Only for the demo
        id: 8,
        pseudo: 'J1',
        avatar: 'avatar.png',
        answer: '52',
    }

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
                        {/* Timmer */}
                        <h2 className="game__interface--question">Question</h2>
                        <div className="game__interface--players">
                            {/* List of players, need to place user in the middle */}
                            {
                                displayedPlayers.map((player) => (
                                    <PlayerDisplay
                                        key={player.id}
                                        player={player}
                                    />
                                ))
                            }
                        </div>
                        <form
                            className="game__interface--answer"
                        >
                            <input
                                type="text"
                                placeholder="Votre réponse.."
                                value={inputValue}
                                onChange={(e) => changeInputValue(e.target.value)}
                            />
                            <button
                                type="submit"
                            >
                                Valider
                            </button>
                        </form>
                    </div>
                    <div className="game__tchat">
                        Tchat
                    </div>
                </div>
                <div className="game__ranking">
                    <h2>Ranking</h2>
                    <div className="game__ranking--list">
                        {/* Display user score in first position */}
                        <Score player={playerUser} />
                        {/* then other players */}
                        {
                            otherPlayers.map((player) => (
                                <Score
                                    key={player.id}
                                    player={player}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

Game.propTypes = {
    player: PropTypes.string.isRequired,
    otherPlayers: PropTypes.array.isRequired, // Need id, pseudo, answer, score, codeAvatar
    inputValue: PropTypes.string.isRequired,
    changeInputValue: PropTypes.func.isRequired,
};

export default Game;