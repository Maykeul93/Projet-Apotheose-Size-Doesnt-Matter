import { HiOutlineInformationCircle } from 'react-icons/hi';
import { IconContext } from 'react-icons';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import UserInteractions from 'containers/CreateRoom/UserInteractions';
import PlayerWithAvatar from 'containers/PlayerWithAvatar';
import useWidthDimension from 'customHooks/screenSize';
import Rules from './Rules';
import './style.scss';

function CreateRoom({
    room,
}) {
    const screenWidth = useWidthDimension();

    if (room) {
        const path = `/room/${room}`
        return (<Redirect to={path} />)
    }

    return (
        <main className="createRoom page__main">
            <div className="createRoom__player">
                <PlayerWithAvatar />
            </div>
            {
                screenWidth > 769 ? (
                    <div className="createRoom__menu">
                        <Rules />
                        <UserInteractions />
                    </div>
                ) : (
                    <>
                        <div className="createRoom__menu">
                            <UserInteractions />
                        </div>
                        <div className="createRoom__rulesIcon">
                            <button
                                className="createRoom__rulesIcon--button"
                                type="button"
                            >
                                <IconContext.Provider
                                    value={{className: "createRoom__rulesIcon--icon"}}
                                >
                                    <HiOutlineInformationCircle size="25" />
                                </IconContext.Provider>
                                <h2>Règles du jeu</h2>
                            </button>
                        </div>
                        
                    </>
                )
            }
            
        </main>
    );
}

CreateRoom.propTypes = {
    room: PropTypes.string.isRequired,
};

export default CreateRoom;