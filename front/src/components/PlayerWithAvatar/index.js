import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import avatars from 'styles/images/avatars';
import './style.scss';


function PlayerWithAvatar({ user, setAvatar }) {
    const [ index, setIndex ] = useState(0);

    useEffect(() => {
        const userAvatarIndex = avatars.findIndex((avatar) => avatar.name === user.avatar);
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
                <button
                    type="button"
                    onClick={previousAvatar}
                >
                    {/* Ajouter une image plus sympa*/}
                    &lt;
                </button>
                <div className="playerCard__avatarChoice--img">
                    <img src={avatars[index].path} alt=""/>
                </div>
                <button
                    type="button"
                    onClick={nextAvatar}
                >
                    {/* Ajouter une image plus sympa*/}
                    &gt;
                </button>
            </div>
        </div>
    );
}

PlayerWithAvatar.propTypes = {
    user: PropTypes.object.isRequired,
    setAvatar: PropTypes.func.isRequired,
};

export default PlayerWithAvatar;