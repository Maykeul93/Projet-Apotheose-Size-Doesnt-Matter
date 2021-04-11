import PropTypes from 'prop-types';
import './style.scss';

function Footer() {
    return (
        <div className="footer">
            <a href="#" className="footer__link">Qui sommes-nous?</a>
            <p className="footer__copyright">Size Doesn't Matter - © copyright</p>
            <a href="#" className="footer__link">Contact</a>
        </div>
    );
}

Footer.propTypes = {

};

export default Footer;