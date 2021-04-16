import React from 'react';
import Field from 'containers/Profil/Field';

const Informations = ({avatar, pseudo, email }) => (
        <div className="profil profil__information">
            <div className="profil__avatar-content">
                <img className="profil__avatar" src={avatar} alt="avatar"/>
                <span className="profil__add-avatar">+</span>
            </div>
            <form className="profil__form">
                <label>{ pseudo }<span>+</span></label>
                <Field 
                    type="text" 
                    placeholder="Nouveau pseudo"
                    name="pseudo"
                />
                <label>{ email }<span>+</span></label>
                <Field 
                    type="email" 
                    placeholder="Nouvelle adresse email"
                    name="email"
                    />
                <label>Mot de passe :</label>
                <Field 
                    type="password" 
                    placeholder="Ancien mot de passe"
                    name="oldPassword"
                    />
                <Field 
                    type="password" 
                    placeholder="Nouveau mot de passe"
                    name="newPassword"
                    />
                <Field 
                    type="password" 
                    placeholder="Valider mot de passe"
                    name="validNewPassword"
                    />
                <button type="submit">Valider</button>
            </form>
            <button type="button">Supprimer mon compte</button>
        </div>
);

export default Informations;
