import api from 'api';
import React, { useState } from 'react';

import './styles.scss';

const SignIn = ({}) => {
    const [pseudo, setPseudo] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validPassword, setValidPassword] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false);

    const handlePseudoChange = (e) => {
        setPseudo(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleValidPasswordChange = (e) => {
        setValidPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check Password
        if (password !== validPassword){
            return setMessage('Vos mots de passe ne sont pas identiques')
        };
        // Sign in request API
        setLoading(true);
        api.post('/signup', {
            pseudo,
            email,
            password,
        })
        .then((response)=> {
            setMessage(response.data)
        })
        .catch((error)=> {
            setMessage(error)
        })
        .finally(() => {
            setLoading(false)
        });
    };
    return(
        <main className="signup page__main">
            <h1 className="signup__title">Inscription</h1>
            <form className="signup__form" onSubmit={handleSubmit}>
                <label className="signup__label">
                    <p>Choisissez un pseudo:</p>
                    <input 
                        type="text"
                        placeholder="Pseudo"
                        value={pseudo}
                        onChange={handlePseudoChange}
                    />
                    </label>
                <label className="signup__label">
                    <p>Entrer votre adresse email:</p>
                    <input 
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </label>
                <label className="signup__label">
                    <p>Choisissez un mot de passe:</p>
                    <input 
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </label>
                <label className="signup__label">
                    <p>Valider votre mot de passe:</p>
                    <input 
                        type="password"
                        placeholder="Password"
                        value={validPassword}
                        onChange={handleValidPasswordChange}
                    />
                </label>
                {
                    loading ?  (
                        <p>Inscription en cours</p>
                    ) : (
                        <button type="submit">
                            S'inscrire
                        </button>
                    )
                }
                {
                    message.length > 0 &&
                    <p>{message}</p>
                }
            </form>
        </main>
    )
};

export default SignIn;
