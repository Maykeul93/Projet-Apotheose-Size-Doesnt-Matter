import PropTypes from 'prop-types';

import Header from 'components/Header';
import Footer from 'components/Footer';

import './style.scss';

function Page() {
    return (
        <div className="page">
            <Header />
                Page
            <Footer />
        </div>
    );
}

Page.propTypes = {

};

export default Page;