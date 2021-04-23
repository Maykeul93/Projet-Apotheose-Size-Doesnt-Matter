import { setLogout } from 'actions/user';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.scss';

function Menu() {
    const dispatch = useDispatch()
    const toggleMenu = () => {
        console.log('j\'affiche le menu');
        // Comportement à modifier une fois redux et les states implémentés
        // Display menu since user click a first time on menu
        document.querySelector('.menu__options').classList.add('is-displayed');
        document.querySelector('.menu__options').classList.toggle('is-active');
    };

    const handleLogOut = () => {
        localStorage.removeItem('token');
        dispatch(setLogout())
    };
    
    return (
        <div className="menu">
            <div
                className="menu__icon"
                onClick={toggleMenu}
            >Menu</div>
            <ul
                className="menu__options"
            >
                <li className="menu__option">
                    <Link to="/page/profil">
                        Mon profil
                    </Link>
                </li>
                <li className="menu__option">
                    <Link to="/page/admin">
                        Admin
                    </Link>
                </li>
                <li className="menu__option">
                    <Link to="/page/createRoom">
                        Jouer
                    </Link>
                    </li>
                <li 
                className="menu__option"
                onClick={handleLogOut}
                >Se déconnecter</li>
            </ul>
        </div>
    );
}

Menu.propTypes = {

};

export default Menu;