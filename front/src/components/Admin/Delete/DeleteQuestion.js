import React from 'react';
import PropTypes from 'prop-types';

const DeleteQuestion = ({questions, questionId, onSelectChange, onSubmit}) => (
    <React.Fragment>
        <label className="form-content__label">
            Selectionner la question à supprimer :
        </label>
        <select 
            className="form-content__select" 
            name="questionId"
            value ={questionId} 
            onChange={(e) => onSelectChange(e.target.value)}
            >
                {
                    questions.map((question) => (
                            <option 
                            key={question.question_id}
                            value={question.question_id}
                            >
                                {question.question_id} - {question.content}
                            </option>
                    ))
                }
            </select>
        <button 
        className="form-content__button" 
        type="submit"
        onClick={onSubmit}
        >Valider</button>
    </React.Fragment>
);

DeleteQuestion.propTypes = {
    questions: PropTypes.array.isRequired,
    questionId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    onSelectChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default DeleteQuestion;
