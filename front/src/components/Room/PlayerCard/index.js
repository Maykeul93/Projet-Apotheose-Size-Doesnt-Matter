import { useState, useEffect } from 'react';
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
            <h2 className="room__playerCard--pseudo">{player.pseudo}</h2>
            <img
                src={avatars[index].path}
                alt={`avatar ${avatars[index].name}`}
                className="room__playerCard--img"
            />
        </div>
    );
}

PlayerCard.propTypes = {
    player: PropTypes.object.isRequired,
};

export default PlayerCard;