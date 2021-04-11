import PropTypes from 'prop-types';
import './style.scss';

function Menu() {
    const toggleMenu = () => {
        console.log('j\'affiche le menu');
        // Comportement à modifier une fois redux et les states implémentés
        // Display menu since user click a first time on menu
        document.querySelector('.menu__options').classList.add('is-displayed');
        document.querySelector('.menu__options').classList.toggle('is-active');
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
                <li className="menu__option">Mon profil</li>
                <li className="menu__option">Jouer</li>
                <li className="menu__option">Se déconnecter</li>
            </ul>
        </div>
    );
}

Menu.propTypes = {

};

export default Menu;