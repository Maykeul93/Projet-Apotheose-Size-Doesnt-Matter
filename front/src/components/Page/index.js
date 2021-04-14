import { useParams, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import Footer from 'components/Footer';
import CreateRoom from 'components/CreateRoom';

//Import Home component
import Home from 'components/Home';

import './style.scss';

function Page() {
    // get the params of the road to choose which content is displayed
    const { page } = useParams();

    console.log(page);

    const component = {
        signin: 'Signin Component',
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
<<<<<<< HEAD
                    // <div className="page__main">Home</div>
                    <Home />
=======
                    <>Home</>
>>>>>>> 24436927fd2b8bce3f1b3aff03edc999865c74aa
                )
            }
            
            <Footer />
        </div>
    );
}

Page.propTypes = {

};

export default Page;