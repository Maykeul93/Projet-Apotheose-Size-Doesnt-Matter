import React from 'react';
import Field from 'containers/Profil/Field';
import PropTypes from 'prop-types';

const Informations = ({avatar, pseudo, email, onSubmit, message }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    }
    return(
        <div className="profil profil__information">
            <div className="profil__avatar-content">
                <img className="profil__avatar" src={avatar} alt="avatar"/>
                <span className="profil__add-avatar">+</span>
            </div>
            <form className="profil__form" onSubmit={handleSubmit}>
                <label>{ pseudo }</label>
                <Field 
                    type="text" 
                    placeholder="Nouveau pseudo"
                    name="pseudo"
                />
                <label>{ email }</label>
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
                    name="validPassword"
                    />
                <button type="submit">Valider</button>
            </form>
            {
                message.length > 0  && (
                    <p>{message}</p>
                )
            }
            <button type="button">Supprimer mon compte</button>
        </div>
    )
};

Informations.propTypes = {
    avatar: PropTypes.string,
    pseudo: PropTypes.string,
    email: PropTypes.string,
    message: PropTypes.string,
    onSubmit: PropTypes.func,
};

Informations.defaultProps = {
    avatar: '',
    pseudo: '',
    email: '',
    message: '',
    onSubmit: () => {}
};

export default Informations;
