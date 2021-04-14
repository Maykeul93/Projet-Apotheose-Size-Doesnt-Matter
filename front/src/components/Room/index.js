import PropTypes from 'prop-types';

import Header from 'components/Header';

import './style.scss';

function Room() {
    return (
        <div className="room">
            <Header />
            <div className="room__container">
                Salon
            </div>
        </div>
    );
}

Room.propTypes = {

};

export default Room;