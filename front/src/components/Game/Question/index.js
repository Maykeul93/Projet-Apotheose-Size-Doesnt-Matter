import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Question({ question }) {
    return (
        <h2 className="question">
            {question}
        </h2>
    );
}

Question.propTypes = {
    question: PropTypes.string.isRequired,
};

export default Question;