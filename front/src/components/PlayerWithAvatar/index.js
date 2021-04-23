import React from 'react';
import PropTypes from 'prop-types';
import avatars from 'styles/images/avatars';
import './style.scss';


function PlayerWithAvatar({ user }) {
    
console.log(avatars);
    return (
        <div className="playerCard">
            <h2 className="playerCard__title">{user.pseudo}</h2>
            <div className="playerCard__avatarChoice">
                <button type="button">
                    &lt;
                </button>
                <div className="playerCard__avatarChoice--img">
                    {/* Here place the img of the avatar */}
                    {user.avatar}
                </div>
                <button type="button">
                    &gt;
                </button>
            </div>
        </div>
    );
}

PlayerWithAvatar.propTypes = {
    user: PropTypes.object.isRequired,
};

export default PlayerWithAvatar;