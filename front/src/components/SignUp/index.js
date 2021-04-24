import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import './styles.scss';
import Field from 'containers/SignUp/Field';

const SignUp = ({ loading, onSubmit, isRegistered }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit()
    };

    if (isRegistered){
        return <Redirect to="/" />
    }

    return(
        <main className="signup page__main">
            <h1 className="signup__title">Inscription</h1>
            <form className="signup__form" onSubmit={handleSubmit}>
                <label className="signup__label">
                    <p>Choisir votre pseudo:</p>
                    <Field 
                        className="signup__field"
                        type="text"
                        placeholder="Pseudo"
                        name='pseudo'
                    />
                    </label>
                <label className="signup__label">
                    <p>Entrer une adresse email:</p>
                    <Field
                        className="signup__field" 
                        type="email"
                        placeholder="Email"
                        name='email'
                    />
                </label>
                <label className="signup__label">
                    <p>Choisir un mot de passe:</p>
                    <Field 
                        className="signup__field"
                        type="password"
                        placeholder="Password"
                        name='password'
                    />
                </label>
                <label className="signup__label">
                    <p>Confirmer votre mot de passe:</p>
                    <Field 
                        className="signup__field"
                        type="password"
                        placeholder="Password"
                        name='validPassword'
                    />
                </label>
                {
                    loading ?  (
                        <p>Inscription en cours</p>
                    ) : (
                        <button className="signup__button" type="submit">
                            S'inscrire
                        </button>
                    )
                }
            </form>
        </main>
    )
};

SignUp.propTypes = {
    loading: PropTypes.bool,
};

SignUp.defaultProps = {
    loading: false,
};


export default SignUp;
