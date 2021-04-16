import React, { useState } from 'react';
import PropTypes from 'prop-types';

import avatar from './avatar.png';
import './styles.scss';

const Profil = ({pseudo, email}) => {
    const [onglet, setOnglet] = useState("information")
    return(
        <div className="profil page__main">
            <div className="profil__onglet-content">
                <span 
                    className="profil__onglet"
                    onClick={() => setOnglet('information')}
                >Informations</span>
                <span 
                    className="profil__onglet"
                    onClick={() => setOnglet('historique')}
                >Historique</span>
            </div>

            {
                onglet ==="information" && (
                    <div className="profil profil__information">
                        <div className="profil__avatar-content">
                            <img className="profil__avatar" src={avatar} alt="avatar"/>
                            <span className="profil__add-avatar">+</span>
                        </div>
                        <form className="profil__form">
                            <label>{ pseudo }<span>+</span></label>
                            <input type="text" placeholder="Nouveau pseudo"/>
                            <label>{ email }<span>+</span></label>
                            <input type="email" placeholder="Nouvelle adresse email"/>
                            <label>Mot de passe :</label>
                            <input type="password" placeholder="Ancien mot de passe"/>
                            <input type="password" placeholder="Nouveau mot de passe"/>
                            <input type="password" placeholder="Valider mot de passe"/>
                            <button type="submit">Valider</button>
                        </form>
                        <button type="button">Supprimer mon compte</button>
                    </div>
                )
            }
            {
                onglet ==="historique" && (
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
                )
            }
        </div>
    )
};

Profil.propTypes = {
    pseudo: PropTypes.string,
    email: PropTypes.string,
};

Profil.defaultProps = {
    pseudo: '',
    email: '',
};

export default Profil;
