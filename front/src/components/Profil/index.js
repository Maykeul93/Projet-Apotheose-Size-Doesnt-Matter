import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import Informations from 'containers/Profil/Informations';
import Historique from './Historique';
import avatars from 'styles/images/avatars'
const Profil = ({avatar}) => {
    const [onglet, setOnglet] = useState("informations")
    const myAvatar = avatars.find((avatarName) => avatarName.name.toLowerCase() === avatar.toLowerCase())
    return(
        <div className="profil page__main">
            <div className="profil__onglet-content">
                <span 
                    className="profil__onglet"
                    onClick={() => setOnglet('informations')}
                >Informations</span>
                <span 
                    className="profil__onglet"
                    onClick={() => setOnglet('historique')}
                >Historique</span>
            </div>
            <div className="profil__main">
            {
                onglet ==="informations" && (
                    <Informations 
                        avatar={myAvatar.path}
                    />
                )
            }
            {
                onglet ==="historique" && (
                    <Historique avatar={myAvatar.path}/>
                )
            }
            </div>
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
