import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Question({
    questions,
    round,
    isRound,
}) {
    const index = round < questions.length ? round - 1 : questions.length - 1;
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
                            <span>La bonne réponse était : </span>
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