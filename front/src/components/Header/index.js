import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Menu from 'components/Menu';

import './style.scss';

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <div className="header__logo"><span>Logo</span></div>
            </Link>
            <h1 className="header__title">Size Doesn't Matter</h1>
            <Menu />
        </div>
    );
}

Header.propTypes = {

};

export default Header;