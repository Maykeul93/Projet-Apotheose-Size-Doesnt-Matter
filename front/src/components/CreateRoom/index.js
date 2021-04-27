import { useEffect } from 'react';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { IconContext } from 'react-icons';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import UserInteractions from 'containers/CreateRoom/UserInteractions';
import PlayerWithAvatar from 'containers/PlayerWithAvatar';
import useWidthDimension from 'customHooks/screenSize';
import Rules from './Rules';
import './style.scss';

function CreateRoom({
    room,
    setSocket,
    socket,
}) {
    const screenWidth = useWidthDimension();

    useEffect(() => {
        if (!socket) {
            setSocket();
        }
    }, []);

    if (room) {
        const path = `/room/${room}`
        return (<Redirect to={path} />)
    }

    const handleRules = () => {
        toast.info(<Rules />, {
            position: "top-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <main className="createRoom page__main">
            <div className="createRoom__player">
                <PlayerWithAvatar />
            </div>
            {
                screenWidth > 900 ? (
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
                                onClick={handleRules}
                            >
                                <IconContext.Provider
                                    value={{className: "createRoom__rulesIcon--icon"}}
                                >
                                    <HiOutlineInformationCircle size="25" />
                                </IconContext.Provider>
                                <h2>Règles du jeu</h2>
                            </button>
                        </div>
                        <ToastContainer
                            position="top-center"
                            autoClose={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                        />
                    </>
                )
            }
            
        </main>
    );
}

CreateRoom.propTypes = {
    room: PropTypes.string.isRequired,
    setSocket: PropTypes.func.isRequired,
    socket: PropTypes.object.isRequired,
};

export default CreateRoom;