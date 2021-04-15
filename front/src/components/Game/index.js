import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import Score from './Score';
import './style.scss';

function Game({ player, otherPlayers }) {
    return (
        <>
            <Header />
            <div className="game game__main">
                <div className="game__left">
                    <div className="game__interface">
                        Game interface
                    </div>
                    <div className="game__tchat">
                        Tchat
                    </div>
                </div>
                <div className="game__ranking">
                    <h2>Ranking</h2>
                    <div className="game__ranking--list">
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