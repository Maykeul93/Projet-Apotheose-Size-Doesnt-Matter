import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';
import Field from 'containers/Profil/Field';
import { setProfilError, setProfilSuccess } from 'actions/profil';
//Icons import 
import {FaPlus} from 'react-icons/fa';
import { BiEdit } from 'react-icons/bi'
import { ImCross } from 'react-icons/im'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

Modal.setAppElement(document.getElementById('profil'));

const Informations = ({ avatar, pseudo, email, onSubmit, success, error, deleteAccount, avatars, changeAvatar , setChangeAvatar }) => {
    let history = useHistory();
    // set Edit button 
    const [editPseudo, setEditPseudo] = useState(false);
    const [editEmail, setEditEmail] = useState(false);
    // set modals
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    function toggleDeleteModal() {
        setDeleteModalOpen(!deleteModalOpen);
      }
    const [avatarModalOpen, setAvatarModalOpen] = useState(false);
    function toggleAvatarModal() {
        setAvatarModalOpen(!avatarModalOpen);
        setChangeAvatar(undefined)
      }

    // handle Avatar 
    const handleAvatarChange = (e) => {
        console.log(e.target.name)
        setChangeAvatar(e.target.name)
    }
    const selectedAvatar = avatars.find((avatar) => avatar.name === changeAvatar)

    const submitNewAvatar = () => {
        onSubmit();
        toggleAvatarModal();
    }
    // set toast response on profil update
    const dispatch = useDispatch() 
    useEffect(() => {
        if(success.length > 0){
            toast.success(success)
            dispatch(setProfilSuccess(''))
        }else if (error === undefined || error.length > 0 ){
            toast.error(error)
            dispatch(setProfilError(''))
        }
    },[success, error, dispatch])

    // Submit response Form
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    }
    return(
        <div id ="profil" className="profil__information">
            <div className="profil__avatar-content">
                <img className="profil__avatar" src={avatar} alt={avatar}/>
                <button 
                onClick={toggleDeleteModal}
                type="button" 
                className="profil__form-delete">Supprimer mon compte</button>
                <Modal
                    isOpen={deleteModalOpen}
                    onRequestClose={toggleDeleteModal}
                    contentLabel="Delete Account"
                    className="deleteModel"
                    overlayClassName="deleteOverlay"
                    closeTimeoutMS={100}
                    ariaHideApp={false}
                >
                    <h1>Etes-vous sur de vouloir supprimer votre compte?</h1>
                    <p>Cette action est irréversible</p>
                    <div className="buttons">
                        <button className="validButton" onClick={() => {
                            deleteAccount()
                            history.push('/');
                            }}>Oui! Certain</button>
                        <button className="cancelButton" onClick={toggleDeleteModal}>Annuler</button>
                    </div>
                </Modal>
                <button 
                type="button" 
                className="profil__add-avatar"
                onClick={toggleAvatarModal}
                >
                    <FaPlus size="35"/>
                </button>
                <Modal
                    isOpen={avatarModalOpen}
                    onRequestClose={toggleAvatarModal}
                    contentLabel="Change Avatar"
                    className="avatarModal"
                    overlayClassName="avatarOverlay"
                    closeTimeoutMS={100}
                    ariaHideApp={false}
                >
                    <h1>Choisissez un nouvel avatar :</h1>
                        <div className="avatars">
                            {
                                avatars.map((avatar) => (
                                    <div className="avatar">
                                        <img 
                                            className="avatar__img" 
                                            src={avatar.path} 
                                            alt={avatar.name}
                                            name={avatar.name}
                                            onClick={handleAvatarChange}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                        {
                            changeAvatar !== undefined && (
                                <div className="selectedAvatar">
                                    <p>Vous avez choisi : {changeAvatar}</p>
                                    <img className="selectedAvatar__img" src={selectedAvatar.path} alt={selectedAvatar.name}/>
                                </div>
                            )
                        }
                    <div className="buttons">
                        <button 
                        className="validButton"
                        onClick={submitNewAvatar}
                        >
                            Valider</button>
                        <button 
                        className="cancelButton"
                        onClick={toggleAvatarModal}
                        >
                            Annuler</button>
                    </div>
                </Modal>
            </div>
            <form className="profil__form" onSubmit={handleSubmit}>
                <div className="profil__edit">
                    { !editPseudo ? (
                        <label>{ pseudo }</label>
                        ) : (
                            <Field 
                                className="profil__form-pseudo"
                                type="text" 
                                placeholder="Nouveau pseudo"
                                name="pseudo"
                            />
                        )
                    }
                    <BiEdit 
                        color='white'
                        onClick={() => setEditPseudo(true)}
                    />
                    <ImCross 
                        color='red'
                        onClick={() => setEditPseudo(false)}
                    />
                </div>
                <div className="profil__edit">
                    { !editEmail ? (
                        <label>{ email }</label>
                        ) : (
                            <Field 
                                className="profil__form-email"
                                type="email" 
                                placeholder="Nouvelle adresse email"
                                name="email"
                            />
                        )
                    }
                    <BiEdit 
                        color='white'
                        onClick={() => setEditEmail(true)}
                    />
                    <ImCross 
                        color='red'
                        onClick={() => setEditEmail(false)}
                    />
                </div>
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
            <ToastContainer position="bottom-center" />
            </form>
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
