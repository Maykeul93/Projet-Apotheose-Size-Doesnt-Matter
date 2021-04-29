import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

import Informations from 'containers/Profil/Informations';
import Historique from 'containers/Profil/Historique';
import avatars from 'styles/images/avatars'
const Profil = ({avatar, requestHistory}) => {
    const [onglet, setOnglet] = useState("informations")
    const [activeOnglet, setactiveOnglet] = useState(true)

    const myAvatar = avatars.find((avatarName) => avatarName.name.toLowerCase() === avatar.toLowerCase())
    return(
        <div className="profil page__main">
            <div className="profil__onglet-content">
                <span 
                    className={classNames("profil__onglet", {"active": activeOnglet})}
                    onClick={() => {
                        setOnglet('informations')
                        setactiveOnglet(true)
                    }}
                >Informations</span>
                <span 
                    className={classNames("profil__onglet", {"active": !activeOnglet})}
                    onClick={() => {
                        requestHistory()
                        setactiveOnglet(false)
                        setOnglet('historique')
                    }}
                >Historique</span>
            </div>
            <div className="profil__main">
            {
                onglet ==="informations" && (
                    <Informations 
                        avatars={avatars}
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
