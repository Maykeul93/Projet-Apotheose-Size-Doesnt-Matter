import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import './style.scss';

function Game() {
    return (
        <div className="game">
            <Header />
            <div className="game__container">
                Game
            </div>
        </div>
    );
}

Game.propTypes = {

};

export default Game;