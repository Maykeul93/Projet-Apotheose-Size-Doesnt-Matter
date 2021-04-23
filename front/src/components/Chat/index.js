import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss'
import Messages from './Messages';
import Form from './Form';

const Chat = ({ messages, chatSendMessage, userId }) => {
    return (

        <div className=" chat room__right--tchat">
            <Messages
                messages={messages}
                userId={userId}
            />
            <Form onSubmit={chatSendMessage} />
        </div>
    )
};

Chat.propTypes = {
    messages: PropTypes.array.isRequired,
    userId: PropTypes.number.isRequired,
    chatSendMessage: PropTypes.func.isRequired,
};

export default Chat;
