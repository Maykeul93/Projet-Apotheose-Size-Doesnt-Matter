import React from 'react';

const Historique = ({
    avatar, 
    numberOfGame,
    lastGamePlayed,
    firstPlace,
    secondPlace,
    thirdPlace,
    exactAnswer
}) => (
    <div className="profil profil__historique">
        <div className="profil__avatar-content">
            <img className="profil__avatar-history" src={avatar} alt="avatar"/>
        </div>
        <p className="profil__historique-first">1ere place: {firstPlace} </p>
        <p className="profil__historique-second">2eme place: {secondPlace} </p>
        <p className="profil__historique-third">3eme place: {thirdPlace} </p>
        <p className="profil__historique-last">Dernière partie : {lastGamePlayed} </p>
        <p className="profil__historique-exactly">Nombre de réponses exactes: {exactAnswer} </p>
        <p className="profil__historique-game">Nombre de parties: {numberOfGame}</p>
    </div>
);

export default Historique;
