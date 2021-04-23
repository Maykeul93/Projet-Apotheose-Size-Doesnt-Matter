import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
// import module classnames

import './styles.scss';

const Messages = ({ messages, userId }) => {
    return(
        <div className="chat__messages">
            {
                messages && messages.map((message)=> (
                    //TODO checker l'id du message, si id === userId aors on ajoute une classe pour afficher le message à droite ou dans une autre couleur
                    // classname pour attribuer la classe 'ownMessage'
                    // classnames('message', { ownMessage: id === userId })
                    <div
                        className="message"
                        key={uniqid()}
                    >
                        <p className="message__author">{message.pseudo}</p>
                        <p className="message__content">{message.message}</p>
                    </div>
                ))
            }
        </div>
    )
};

Messages.propTypes = {
    userId: PropTypes.number.isRequired,
    messages: PropTypes.array.isRequired,
};
export default Messages;
