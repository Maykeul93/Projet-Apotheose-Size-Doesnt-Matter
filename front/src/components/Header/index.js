import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Menu from 'components/Menu';
import Connexion from 'containers/Header/Connexion';
import logo from 'styles/images/logo/logo.png'
import './style.scss';

function Header({ isLogged }) {
    return (
        <div className="header">
            <Link to="/">
                <div className="header__logo">
                    <img src={logo} alt="logo" />
                </div>
            </Link>
            <h1 className="header__title">Size Doesn't Matter</h1>
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