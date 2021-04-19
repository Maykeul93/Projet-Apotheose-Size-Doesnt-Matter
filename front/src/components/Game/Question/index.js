import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Question({ round, questions }) {
    console.log(questions[round === 0 ? 0 : round - 1].answer);
    return (
        <h2 className="question">
            {questions[round === 0 ? 0 : round - 1].content}
        </h2>
    );
}

Question.propTypes = {
    round: PropTypes.number.isRequired,
    questions: PropTypes.array.isRequired,
};

export default Question;