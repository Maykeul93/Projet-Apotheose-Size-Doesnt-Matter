import { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { GiFrayedArrow } from 'react-icons/gi';
import PropTypes from 'prop-types';
import avatars from 'styles/images/avatars';
import './style.scss';

import { findIndexOfUserAvatar } from 'selectors/gameSelectors';


function PlayerWithAvatar({ user, setAvatar }) {
    const [ index, setIndex ] = useState(0);

    useEffect(() => {
        const userAvatarIndex = findIndexOfUserAvatar(user, avatars);
        setIndex( userAvatarIndex !== -1 ? userAvatarIndex : 0);
    }, []);

    const previousAvatar = () => {
        const newIndex = index === 0 ? avatars.length - 1 : index - 1;
        setIndex(newIndex);
        setAvatar(avatars[newIndex].name);
    };

    const nextAvatar = () => {
        const newIndex = index === avatars.length - 1 ? 0 : index + 1;
        setIndex(newIndex);
        setAvatar(avatars[newIndex].name);
    };

    return (
        <div className="playerCard">
            <h2 className="playerCard__title">{user.pseudo}</h2>
            <div className="playerCard__avatarChoice">
                <IconContext.Provider value={{className: "playerCard__button playerCard__button--left"}}>
                    <button
                        type="button"
                        onClick={previousAvatar}
                        className="playerCard__button"
                    >
                        {/* Ajouter une image plus sympa*/}
                        <GiFrayedArrow />
                    </button>
                </IconContext.Provider>
                <div className="playerCard__avatarChoice--img">
                    <img src={avatars[index].path} alt={`user's avatar : ${avatars[index].name}`}/>
                </div>
                <IconContext.Provider value={{className: "playerCard__button playerCard__button--right"}}>
                    <button
                        type="button"
                        onClick={nextAvatar}
                        className="playerCard__button"
                    >
                        {/* Ajouter une image plus sympa*/}
                        <GiFrayedArrow />
                    </button>
                </IconContext.Provider>
            </div>
        </div>
    );
}

PlayerWithAvatar.propTypes = {
    user: PropTypes.object.isRequired,
    setAvatar: PropTypes.func.isRequired,
};

export default PlayerWithAvatar;