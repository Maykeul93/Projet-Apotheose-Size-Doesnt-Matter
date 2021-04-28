import { setLogout } from 'actions/user';
import { FaLink } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { MdExitToApp } from 'react-icons/md';
import { BsPlayFill } from 'react-icons/bs';
import { IoIosStar } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { GiSnakeSpiral } from 'react-icons/gi';
import { GiHouse } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link} from 'react-router-dom';
import './style.scss';

function Menu({role}) {
    let history = useHistory();
    const dispatch = useDispatch()
    const toggleMenu = () => {
        console.log(role)
        console.log('j\'affiche le menu');
        // Comportement à modifier une fois redux et les states implémentés
        // Display menu since user click a first time on menu
        document.querySelector('.menu__options').classList.add('is-displayed');
        document.querySelector('.menu__options').classList.toggle('is-active');
    };

    const handleLogOut = () => {
        localStorage.removeItem('token');
        dispatch(setLogout());
        history.push('/');
    };
    
    return (
        <div className="menu">
            <div
                className="menu__icon"
                onClick={toggleMenu}
            >
                <IconContext.Provider 
                value={{className:"menu__icon-menu"}}
                >
                    <GiSnakeSpiral size="40" color="black"/>
                </IconContext.Provider> 
            </div>
            <ul
                className="menu__options"
            >
                <li className="menu__option" >
                    <IconContext.Provider 
                    value={{className:"menu__option--homeIcon"}}
                    >
                        <GiHouse size="20" color="black"/>
                    </IconContext.Provider> 
                    <Link to="/" style={{ textDecoration: 'none', padding:'0.5rem' }}>
                       <div className="menu__option--home">Acceuil</div> 
                    </Link>
                </li>

                <li className="menu__option">
                    <IconContext.Provider 
                    value={{className:"menu__option--profilIcon"}}
                    >
                        <CgProfile size="20" color="black"/>
                    </IconContext.Provider> 
                    <Link to="/page/profil" style={{ textDecoration: 'none', padding:'0.5rem' }} >
                        <div className="menu__option--profil">Mon profil</div>
                    </Link>
                </li>
                {
                    role === 'admin' &&
                    <li className="menu__option">
                    <IconContext.Provider 
                    value={{className:"menu__option--adminIcon"}}
                    >
                        <IoIosStar size="20" color="black"/>
                    </IconContext.Provider> 
                    <Link to="/page/admin" style={{ textDecoration: 'none', padding:'0.5rem' }}>
                        <div className="menu__option--admin">Admin</div>
                    </Link>
                </li>
                }
                <li className="menu__option">
                    <IconContext.Provider 
                    value={{className:"menu__option--playIcon"}}
                    >
                        <BsPlayFill size="20" color="black"/>
                    </IconContext.Provider> 
                    <Link to="/page/createRoom" style={{ textDecoration: 'none', padding:'0.5rem' }}>
                       <div className="menu__option--play">Jouer</div> 
                    </Link>
                </li>
                <li 
                className=""
                onClick={handleLogOut}
                >
                   
                   <div className="menu__option-deco">Se deconnecter</div> 
                </li>
            </ul>
        </div>
    );
}

Menu.propTypes = {

};

export default Menu;