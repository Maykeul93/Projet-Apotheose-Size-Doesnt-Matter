import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import UserInteractions from 'containers/CreateRoom/UserInteractions';
import PlayerWithAvatar from 'components/PlayerWithAvatar';
import Rules from './Rules';
import './style.scss';

function CreateRoom({
    user,
    room,
}) {
    
    if (room) {
        const path = `/room/${room}`
        return (<Redirect to={path} />)
    }

    return (
        <main className="createRoom page__main">
            <div className="createRoom__infos">
                <PlayerWithAvatar user={user} />
                <Rules />
            </div>
            <UserInteractions />
        </main>
    );
}

CreateRoom.propTypes = {
    room: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
};

export default CreateRoom;