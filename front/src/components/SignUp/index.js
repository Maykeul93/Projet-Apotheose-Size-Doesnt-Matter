import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import Field from 'containers/Field';

const SignUp = ({ loading, onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit()
    };
    return(
        <main className="signup page__main">
            <h1 className="signup__title">Inscription</h1>
            <form className="signup__form" onSubmit={handleSubmit}>
                <label className="signup__label">
                    <p>Choisissez un pseudo:</p>
                    <Field 
                        type="text"
                        placeholder="Pseudo"
                        name='pseudo'
                    />
                    </label>
                <label className="signup__label">
                    <p>Entrer votre adresse email:</p>
                    <Field 
                        type="email"
                        placeholder="Email"
                        name='email'
                    />
                </label>
                <label className="signup__label">
                    <p>Choisissez un mot de passe:</p>
                    <Field 
                        type="password"
                        placeholder="Password"
                        name='password'
                    />
                </label>
                <label className="signup__label">
                    <p>Valider votre mot de passe:</p>
                    <Field 
                        type="password"
                        placeholder="Password"
                        name='validPassword'
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
