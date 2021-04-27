import React from 'react';
import {FaPlus} from 'react-icons/fa';
import Field from 'containers/Profil/Field';
import PropTypes from 'prop-types';

const Informations = ({avatar, pseudo, email, onSubmit, message }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    }
    return(
        <div className="profil__information">
            <div className="profil__avatar-content">
                <img className="profil__avatar" src={avatar} alt="avatar"/>
                <button type="button" className="profil__form-delete">Supprimer mon compte</button>
                <button type="button" className="profil__add-avatar"><FaPlus size="35"/></button>
            </div>
            <form className="profil__form" onSubmit={handleSubmit}>
                
                <label>{ pseudo }</label>
               
                <Field 
                    className="profil__form-pseudo"
                    type="text" 
                    placeholder="Nouveau pseudo"
                    name="pseudo"
                />
                
                <label>{ email }</label>
                <Field 
                    className="profil__form-email"
                    type="email" 
                    placeholder="Nouvelle adresse email"
                    name="email"
                    />
                <label>Mot de passe :</label>
                <Field 
                    className="profil__form-oldpassword"
                    type="password" 
                    placeholder="Ancien mot de passe"
                    name="oldPassword"
                    />
                <Field 
                    className="profil__form-newpassword"
                    type="password" 
                    placeholder="Nouveau mot de passe"
                    name="newPassword"
                    />
                <Field 
                    className="profil__form-validpassword"
                    type="password" 
                    placeholder="Valider mot de passe"
                    name="validPassword"
                    />
                <button type="submit" className="profil__form-valid" >Valider</button>
            </form>
            {
                message.length > 0  && (
                    <p>{message}</p>
                )
            }
           
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
