import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import './style.scss';

function Game({ player, otherPlayers }) {
    return (
        <>
            <Header />
            <div className="game page__main">
                <div>
                    <div className="game__interface">
                        Game interface
                    </div>
                    <div className="game__tchat">
                        Tchat
                    </div>
                </div>
                <div className="game__ranking">
                    Game ranking
                </div>
            </div>
        </>
    );
}

Game.propTypes = {
    player: PropTypes.string.isRequired,
    otherPlayers: PropTypes.array.isRequired,
};

export default Game;