import React from 'react';
import PropTypes from 'prop-types';

const Question = ({setOption}) => (
    <div className="section">
        <h3 className="section__title">Questions</h3>
        <ul className="section__list">
            <li className="section__item">
                <button 
                type="button"
                onClick={() => setOption('add-question')}
                >Ajouter</button>
            </li>
            <li className="section__item">
                <button 
                type="button"
                onClick={() => setOption('update-question')}
                >Modifier</button>
            </li>
            <li className="section__item">
                <button 
                type="button"
                onClick={() => setOption('delete-question')}
                >Supprimer</button>
            </li>
        </ul>
    </div>
);

Question.propTypes = {
    setOption: PropTypes.func,
};

Question.defaultProps = {
    setOption: () => {},
};

export default Question;
