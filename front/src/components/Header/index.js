import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Menu from 'containers/Menu';
import Connexion from 'containers/Header/Connexion';
import logo from 'styles/images/logo/logo.png'
import './style.scss';

function Header({ isLogged }) {
    return (
        <div className="header">
            <div className="header__logo">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <h1 className="header__title">Size <br />  Doesn't <br /> Matter</h1>
            {
                isLogged ? <Menu /> :
                <Connexion />
            }
        </div>
    );
};

Header.propTypes = {
    isLogged:PropTypes.bool,
};

Header.defaultProps = {
    isLogged: false,
};

export default Header;