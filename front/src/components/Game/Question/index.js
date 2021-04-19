import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Question({ round, questions }) {
    return (
        <h2 className="question">Question</h2>
    );
}

Question.propTypes = {
    round: PropTypes.number.isRequired,
    question: PropTypes.array.isRequired,
};

export default Question;