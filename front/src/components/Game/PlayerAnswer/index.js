import { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function PlayerAnswer({
    isRound,
    sendResponse,
}) {
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
                    />
                    <button
                        className="answer__submit"
                        type="submit"
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
};

export default PlayerAnswer;