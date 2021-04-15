import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function PlayerAnswer({
    inputValue,
    changeInputValue,
    sendResponse,
}) {
    const handleSubmitAnswer = (e) => {
        e.preventDefault();
        sendResponse(inputValue);
    };
    return (
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
            />
            <button
                className="answer__submit"
                type="submit"
            >
                Valider
            </button>
        </form>
    );
}

PlayerAnswer.propTypes = {
    inputValue: PropTypes.string.isRequired,
    changeInputValue: PropTypes.func.isRequired,
    sendResponse: PropTypes.func.isRequired,
};

export default PlayerAnswer;