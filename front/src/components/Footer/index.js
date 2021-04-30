import { Link } from 'react-router-dom';

import './style.scss';

function Footer() {
    return (
        <div className="footer">
            <Link to="/page/aboutUs" className="footer__link">Qui sommes-nous?</Link>
            <Link to="/" className="footer__link">Accueil</Link>
            <p className="footer__copyright">Size Doesn't Matter - © copyright</p>
        </div>
    );
}

export default Footer;