import Field from 'containers/Admin/Add/AddQuestionField';
import React from 'react';
import Proptypes from 'prop-types';

const AddQuestion = ({tags, tagId, onSelectChange, onSubmit}) => {
    console.log(tagId)
    const handleOnSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };
    return(

    <React.Fragment>
        <label className="form-content__label">
            Question:
            <Field
            className="form-content__item" 
            type="text"
            name="question"
            />
        </label>
        <label className="form-content__label">
            Réponse:
            <Field
            className="form-content__item" 
            type="number"
            name="answer"
            />
        </label>
        <label className="form-content__label">
            Tag:
            <select 
            className="form-content__item" 
            name="tagId"
            value ={tagId} 
            onChange={(e) => onSelectChange(e.target.value)}
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
        </label>
        <button 
        className="form-content__button" 
        type="click"
        onClick={handleOnSubmit}
        >Valider</button>
    </React.Fragment>
    )
};

AddQuestion.propTypes = {
    tags: Proptypes.array.isRequired,
    question: Proptypes.string.isRequired,
    answer: Proptypes.string.isRequired,
    tagId: Proptypes.oneOfType([Proptypes.string,Proptypes.number]).isRequired,
    onSelectChange: Proptypes.func.isRequired,
};

AddQuestion.defaultProps= {
    question: '',
    answer: '',
}

export default AddQuestion;
