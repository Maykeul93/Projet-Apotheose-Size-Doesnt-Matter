import { useState, useEffect } from 'react';
import { FaCrown } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { GiCheckMark, GiCrossMark } from 'react-icons/gi';
import PropTypes from 'prop-types';
import './style.scss';
import avatars from 'styles/images/avatars';
import {
    findIndexOfUserAvatar,
} from 'selectors/gameSelectors';

function PlayerCard({ player }) {
    const [index, setIndex] = useState(findIndexOfUserAvatar(player, avatars));

    useEffect(() => {
        setIndex(findIndexOfUserAvatar(player, avatars));
    }, [player]);
    return (
        <div
            className="room__playerCard"
        >
            {
                player.isCreator && (
                    <IconContext.Provider
                        value={{className: "room__playerCard--crown"}}
                    >
                        <FaCrown
                            size="30"
                            color="rgb(223, 226, 0)"
                        />
                    </IconContext.Provider>
                )
            }
            <h2 className="room__playerCard--pseudo">{player.pseudo}</h2>
            <img
                src={avatars[index].path}
                alt={`avatar ${avatars[index].name}`}
                className="room__playerCard--img"
            />
            {
                player.isReady ? (
                    <IconContext.Provider
                        value={{className: "room__playerCard--checkIcon"}}
                    >
                        <GiCheckMark
                            size="45"
                            color="rgb(0, 158, 13)"
                        />
                    </IconContext.Provider>
                ) : (
                    <IconContext.Provider
                        value={{className: "room__playerCard--checkIcon"}}
                    >
                        <GiCrossMark
                            size="45"
                            color="#F51B0A"
                        />
                    </IconContext.Provider>
                )
            }
        </div>
    );
}

PlayerCard.propTypes = {
    player: PropTypes.object.isRequired,
};

export default PlayerCard;