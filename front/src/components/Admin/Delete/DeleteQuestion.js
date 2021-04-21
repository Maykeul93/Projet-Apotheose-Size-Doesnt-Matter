import React from 'react';

const DeleteQuestion = ({questions, questionId, onSelectChange, onSubmit}) => (
    <React.Fragment>
        <label className="form-content__label">
            Selectionner la question à supprimer :
        </label>
        <select 
            className="form-content__item" 
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
        type="button"
        onClick={onSubmit}
        >Valider</button>
    </React.Fragment>
);

export default DeleteQuestion;
