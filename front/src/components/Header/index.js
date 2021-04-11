import PropTypes from 'prop-types';

import Menu from 'components/Menu';

import './style.scss';

function Header() {
    return (
        <div className="header">
            Header
            <Menu />
        </div>
    );
}

Header.propTypes = {

};

export default Header;