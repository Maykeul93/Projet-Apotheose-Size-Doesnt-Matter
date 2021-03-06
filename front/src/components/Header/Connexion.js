import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Connexion = ({ 
    emailValue, 
    onEmailInputChange, 
    passwordValue, 
    onPasswordInputChange, 
    onLogin,
    isDisplayed,
    onDisplayChange 
    }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin();
    }
    return(
        <div className="connexion">
            <button 
            className="connexion__button" 
            type ="button"
            onClick={onDisplayChange}
            >
                Connexion
            </button>
            <div className={
                classNames("connection__menu", {"is-displayed": isDisplayed})
            }>
                <form 
                className="connection__form"
                onSubmit={handleSubmit}
                >
                    <input 
                        className="connection__input"
                        type="email" 
                        placeholder="email"
                        value={emailValue}
                        onChange={(e) => onEmailInputChange(e.target.value)}
                    />
                    <input 
                        className="connection__input" 
                        type="password" 
                        placeholder="password"
                        value={passwordValue}
                        onChange={(e) => onPasswordInputChange(e.target.value)}
                    />
                    <button 
                    className="connection__valider"
                    type="submit"
                    >
                        Valider
                    </button>
                    <Link  className="connection__link" to="/page/signup">Inscription</Link>
                </form>
               
            </div>
        </div>
    )
};

Connexion.propTypes = {
    emailValue: PropTypes.string.isRequired,
    onEmailInputChange: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
};


export default Connexion;
