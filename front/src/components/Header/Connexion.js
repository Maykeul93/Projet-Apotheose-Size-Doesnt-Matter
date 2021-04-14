import React, { useState } from 'react';
import classNames from 'classnames';

const Connexion = () => {
    const [displayed, setDisplayed] = useState(false);

    const toggleDisplayed = () => {
        setDisplayed(!displayed)
    }
    return(
        <div className="connexion">
            <button 
            className="connexion__button" 
            type ="button"
            onClick={toggleDisplayed}
            >
                Connexion
            </button>
            <div className={
                classNames("connection__menu", {"is-displayed": displayed})
            }>
                <input className="connection__input" type="email" placeholder="email" />
                <input className="connection__input" type="password" placeholder="password" />
                <button type="submit">Valider</button>
            </div>
        </div>
    )
};

export default Connexion;
