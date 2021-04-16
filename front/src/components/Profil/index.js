import React, { useState } from 'react';
import PropTypes from 'prop-types';

import avatar from './avatar.png';
import './styles.scss';
import Informations from 'containers/Profil/Informations';
import Historique from './Historique';

const Profil = ({pseudo, email}) => {
    const [onglet, setOnglet] = useState("informations")
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

            {
                onglet ==="informations" && (
                    <Informations 
                        avatar={avatar}
                    />
                )
            }
            {
                onglet ==="historique" && (
                    <Historique avatar={avatar}/>
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
