import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Question({
    questions,
    round,
    isRound,
}) {
    const index = round === 0 ? 0 : round - 1;
    return (
        <>
        {
            isRound ? (
                <>
                    <h2 className="question">
                        {questions[index].content}
                    </h2>
                </>
            ) : (
                <>
                {
                    round > 0 && (
                        <h2 className="question">
                            La bonne réponse était : 
                            <span className="question__answer">{questions[index].answer}</span>
                        </h2>
                    )
                }
                </>
            )
        }
        </>
    );
}

Question.propTypes = {
    questions: PropTypes.array.isRequired,
    round: PropTypes.number.isRequired,
};

export default Question;