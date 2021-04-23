import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Messages = ({messages}) => {
    return(
        <div className="chat__messages">
            {
                //TODO générer un id unique pour la key (via selector ou uniqid)
                messages.map((message, index)=> (
                    <div
                        className="message"
                        key={`message${index}`}
                    >
                        <p className="message__author">{message.author}</p>
                        <p className="message__content">{message.message}</p>
                    </div>
                ))
            }
        </div>
    )
};

Messages.propTypes = {
    messages: PropTypes.array.isRequired,
};
export default Messages;
