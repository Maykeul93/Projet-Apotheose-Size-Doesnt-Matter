import Field from 'containers/Admin/Update/UpdateQuestionField';
import React from 'react';
import Proptypes from 'prop-types';

const UpdateQuestion = ({
    questions, 
    tags, 
    questionId, 
    tagId, 
    onSelectQuestionChange, 
    onSelectTagChange,
    onSubmit
}) => (
    <React.Fragment>
        <label className="form-content__label">
            Selectionner la question à modifier :
        </label>
        <select 
            className="form-content__select" 
            name="questionId"
            value ={questionId} 
            onChange={(e) => onSelectQuestionChange(e.target.value)}
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
        <label className="form-content__label">
            Modifier la question:
        </label>
        <Field 
        className="form-content__input"
        type="text"
        name="question"
        />
        <label className="form-content__label">
            Modifier la réponse:
        </label>
        <Field 
        className="form-content__input"
        type="number"
        name="answer"
        />
        <label className="form-content__label">
            Modifier le tag :
        </label>
        <select 
            className="form-content__select tag" 
            name="tagId"
            value ={tagId} 
            onChange={(e) => onSelectTagChange(e.target.value)}
            >
                {
                    tags.map((tag) => (
                        <option 
                        key={tag.id}
                        value={tag.id}
                        >
                            {tag.name}
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

UpdateQuestion.propTypes = {
    questions: Proptypes.array.isRequired, 
    tags: Proptypes.array.isRequired, 
    questionId: Proptypes.oneOfType([
        Proptypes.string,
        Proptypes.number,
    ]).isRequired,
    tagId: Proptypes.oneOfType([
        Proptypes.string,
        Proptypes.number,
    ]).isRequired, 
    onSelectQuestionChange: Proptypes.func.isRequired, 
    onSelectTagChange: Proptypes.func.isRequired,
    onSubmit: Proptypes.func.isRequired,
};

UpdateQuestion.defaultProps = {
    param: '',
};

export default UpdateQuestion;
