import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import UserInteractions from 'containers/CreateRoom/UserInteractions';
import PlayerWithAvatar from 'containers/PlayerWithAvatar';
import Rules from './Rules';
import './style.scss';

function CreateRoom({
    room,
}) {
    
    if (room) {
        const path = `/room/${room}`
        return (<Redirect to={path} />)
    }

    return (
        <main className="createRoom page__main">
            <div className="createRoom__infos">
                <PlayerWithAvatar />
                <Rules />
            </div>
            <UserInteractions />
        </main>
    );
}

CreateRoom.propTypes = {
    room: PropTypes.string.isRequired,
};

export default CreateRoom;