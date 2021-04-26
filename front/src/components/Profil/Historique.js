import React from 'react';

const Historique = ({avatar}) => (
    <div className="profil profil__historique">
        <div className="profil__avatar-content">
            <img className="profil__avatar-history" src={avatar} alt="avatar"/>
        </div>
        <p className="profil__historique-first">1ere place: 0 </p>
        <p className="profil__historique-second">2eme place: 0 </p>
        <p className="profil__historique-third">3eme place: 0 </p>
        <p className="profil__historique-last">Dernière partie : jamais </p>
        <p className="profil__historique-exactly">Nombre de réponses exactes: 0 </p>
        <p className="profil__historique-game">Nombre de parties: 0 </p>
    </div>
);

export default Historique;
