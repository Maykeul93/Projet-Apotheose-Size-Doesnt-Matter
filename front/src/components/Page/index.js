import { useParams, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import Footer from 'components/Footer';

//Import Home component
import Home from 'components/Home';

import './style.scss';

function Page() {
    // get the params of the road to choose which content is displayed
    const { params } = useParams();

    console.log(params);

    const component = {
        signin: 'Signin Component',
        profil: 'Profil Component',
        admin: 'Admin Component',
        createRoom: 'CreateRoom Component',
        aboutUs: 'AboutUs Component',
        error: 'Error Component',
    };

    // Error gestion in case of road asked isn't exist
    if (params) {
        const isRoadExist = Object.keys(component).find((road) => road === params);

        // If isRoadExist is undefined, redirect to Error Page
        if (!isRoadExist) {
            console.log('isRoadExist', isRoadExist);
            return (<Redirect to="/error" />);
        }
    }

    return (
        <div className="page">
            <Header />
            {/* By default, Home component will be displayed here.
            Otherwise, looking for same key in component object and render the component  */}
            {
                params ? (
                    <div>{component[params]}</div>
                ) : (
                    // <div className="page__main">Home</div>
                    <Home />
                )
            }
            
            <Footer />
        </div>
    );
}

Page.propTypes = {

};

export default Page;