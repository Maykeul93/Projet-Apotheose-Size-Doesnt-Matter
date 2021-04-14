import React from 'react';

const Connexion = () => {
    return(
        <div className="connexion">
            <button 
            className="connexion__button" 
            type ="button"
            onClick={() => console.log("connexion click")}
            >
                Connexion
            </button>
            <div className="connection__menu">
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <button type="submit">Valider</button>
            </div>
        </div>
    )
};

export default Connexion;
