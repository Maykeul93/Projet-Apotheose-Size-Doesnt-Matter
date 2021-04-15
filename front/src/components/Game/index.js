import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import Score from './Score';
import PlayerDisplay from './PlayerDisplay';
import './style.scss';

function Game({ player, otherPlayers }) {
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
                        </div>
                        <form
                            className="game__interface--answer"
                        >
                            <input
                                type="text"
                                placeholder="Votre réponse.."
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
};

export default Game;