import { useParams, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from 'containers/Header';
import Footer from 'components/Footer';
import CreateRoom from 'containers/CreateRoom';
import SignUp from 'components/SignUp'

//Import Home component
import Home from 'components/Home';

import './style.scss';

function Page() {
    // get the params of the road to choose which content is displayed
    const { page } = useParams();

    console.log(page);

    const component = {
        signup: <SignUp />,
        profil: 'Profil Component',
        admin: 'Admin Component',
        createRoom: <CreateRoom />,
        aboutUs: 'AboutUs Component',
        error: 'Error Component',
    };

    // Error gestion in case of road asked isn't exist
    if (page) {
        const isRoadExist = Object.keys(component).find((road) => road === page);

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
                page ? (
                    <>{component[page]}</>
                ) : (
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