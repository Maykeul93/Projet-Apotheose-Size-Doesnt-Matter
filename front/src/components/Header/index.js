import PropTypes from 'prop-types';

import Menu from 'components/Menu';

import './style.scss';

function Header() {
    return (
        <div className="header">
            <div className="header__logo"><span>Logo</span></div>
            <h1 className="header__title">Size Doesn't Matter</h1>
            <Menu />
        </div>
    );
}

Header.propTypes = {

};

export default Header;