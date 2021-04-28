import { useState } from 'react';
import PropTypes from 'prop-types';
import avatars from 'styles/images/avatars';
import './style.scss';

import { findIndexOfUserAvatar } from 'selectors/gameSelectors';

function PlayerAnswer({
    isRound,
    sendResponse,
    user,
}) {
    const index = findIndexOfUserAvatar(user, avatars);
    const [ inputValue, changeInputValue ] = useState('');
    const handleSubmitAnswer = (e) => {
        e.preventDefault();
        changeInputValue('');
        sendResponse(inputValue);
    };
    return (
        <>
        {
            isRound && (
                <form
                    className="answer"
                    onSubmit={handleSubmitAnswer}
                >
                    {/* When the form is submit, send the user answer to the socket server */}
                    <input
                        className="answer__input"
                        type="number"
                        placeholder="Votre réponse.."
                        value={inputValue}
                        onChange={(e) => changeInputValue(e.target.value)}
                        style={{
                            color: avatars[index].color,
                            placeholder: avatars[index].color,
                            borderBottom: avatars[index].color,
                        }}
                    />
                    <button
                        className="answer__submit"
                        type="submit"
                        style={{backgroundColor: avatars[index].color}}
                    >
                        Valider
                    </button>
                </form>
            )
        }
        </>
    );
}

PlayerAnswer.propTypes = {
    isRound: PropTypes.bool.isRequired,
    sendResponse: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
};

export default PlayerAnswer;