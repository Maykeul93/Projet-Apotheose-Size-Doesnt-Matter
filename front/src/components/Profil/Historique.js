import React from 'react';

const Historique = ({avatar}) => (
    <div className="profil profil__historique">
        <div className="profil__avatar-content">
            <img className="profil__avatar" src={avatar} alt="avatar"/>
        </div>
        <p>1ere place: 0 </p>
        <p>2eme place: 0 </p>
        <p>3eme place: 0 </p>
        <p>Dernière partie jouer : jamais </p>
        <p>Nombre de réponses éxactes: 0 </p>
    </div>
);

export default Historique;
