import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from 'containers/Header';
import PlayerAnswer from 'containers/Game/PlayerAnswer';
import LeaveGame from 'containers/Game/LeaveGame';
import DisplayAllPlayers from 'containers/Game/DisplayAllPlayers';
import Ranking from 'containers/Game/Ranking';
import Timer from 'containers/Game/Timer';
import Question from 'containers/Game/Question';
import Round from 'containers/Game/Round';

import './style.scss';

function Game({
    isLaunch,
    isOver,
}) {
    const [ isRanked, setIsRanked ] = useState(false);
    // When the user leaves the game, reset the state 'isLaunch' & redirect to the page of creation Room
    if (!isLaunch){
        return (<Redirect to="/page/createRoom" />);
    }

    return (
        <>
            {console.log('je render l app')}
            <Header />
            <div className="game game__main">
                <div className="game__left">
                    <div className="game__interface">
                        {/* Insertion composant pour afficher des messages Par dessus interface de jeu */}
                        {
                            !isOver ? (
                                <>
                                    <Timer isRanked={isRanked} setIsRanked={setIsRanked} />
                                    <Question />
                                    <DisplayAllPlayers />
                                    <PlayerAnswer />
                                    <Round />
                                </>
                            ) : (
                                <h1>Game is Over</h1>
                            )
                        }
                        
                    </div>
                    <div className="game__bottom">
                        <div className="game__tchat">
                            Tchat
                        </div>
                        <LeaveGame />
                    </div>
                </div>
                <Ranking setIsRanked={setIsRanked}/>
            </div>
        </>
    );
}

Game.propTypes = {
    isOver: PropTypes.bool.isRequired,
    isLaunch: PropTypes.bool.isRequired,
};

export default Game;