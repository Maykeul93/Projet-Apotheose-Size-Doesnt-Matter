import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import './styles.scss';
import Field from 'containers/SignUp/Field';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setSignUpError } from 'actions/signUp';
const SignUp = ({
    loading,
    onSubmit,
    isRegistered,
    setConnexionDisplayed,
    error
}) => {

    const dispatch = useDispatch()
    console.log(error)
    useEffect(() => {
        if(error.length > 0){
            toast.error(error)
            dispatch(setSignUpError(''))
        }
    },[error, dispatch])
    
    useEffect(() => {
        setConnexionDisplayed(false);
    }, [setConnexionDisplayed]);
    
    if (isRegistered){
        return <Redirect to="/" />
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit()
    };



    return(
        <main className="signup page__main">
            <h1 className="signup__title">Inscription</h1>
            <form className="signup__form" onSubmit={handleSubmit}>
                <label className="signup__label">
                    <p>Choisissez votre pseudo:</p>
                    <Field 
                        className="signup__field"
                        type="text"
                        placeholder="Pseudo"
                        name='pseudo'
                        required
                        maxlength="10"
                    />
                    </label>
                <label className="signup__label">
                    <p>Entrez une adresse email:</p>
                    <Field
                        className="signup__field" 
                        type="email"
                        placeholder="Email"
                        name='email'
                        required
                    />
                </label>
                <label className="signup__label">
                    <p>Choisissez un mot de passe:</p>
                    <Field 
                        className="signup__field"
                        type="password"
                        placeholder="Password"
                        name='password'
                        required
                    />
                </label>
                <label className="signup__label">
                    <p>Confirmez votre mot de passe:</p>
                    <Field 
                        className="signup__field"
                        type="password"
                        placeholder="Password"
                        name='validPassword'
                        required
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
                <ToastContainer position="bottom-center" />
            </form>
        </main>
    )
};

SignUp.propTypes = {
    loading: PropTypes.bool,
    setConnexionDisplayed: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    isRegistered: PropTypes.bool.isRequired,
};

SignUp.defaultProps = {
    loading: false,
};


export default SignUp;
