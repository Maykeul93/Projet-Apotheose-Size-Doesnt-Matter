import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Question({ question }) {
    return (
        <h2 className="question">Question</h2>
    );
}

Question.propTypes = {
    question: PropTypes.string,
};

PropTypes.default = {
    question: 'Question',
}

export default Question;