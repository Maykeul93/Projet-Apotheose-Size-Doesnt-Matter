import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
// import module classnames
import classnames from 'classnames';

import './styles.scss';

const Messages = ({ messages, userId }) => {
    const messagesRef = useRef();

    useEffect(() => {
        messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }, [messages]);
    return(
        <div
            className="chat__messages"
            ref={messagesRef}
        >
            {
                messages && messages.map((message)=> (
                    <div
                        className={classnames('message', {'ownMessage': message.id === userId })}
                        key={uniqid()}
                    >
                        <p className="message__author">{message.pseudo + ' :'}</p>
                        <p className="message__content">{message.message}</p>
                        <div className="message__triangle" />
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
