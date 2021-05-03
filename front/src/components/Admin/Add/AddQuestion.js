import Field from 'containers/Admin/Add/AddQuestionField';
import React from 'react';
import Proptypes from 'prop-types';
const AddQuestion = ({tags, tagId, onSelectChange, onSubmit}) => {
    const handleOnSubmit = () => {
        onSubmit();
    };
    return(

    <React.Fragment>
        <label className="form-content__label">
            Question:
        </label>
        <Field
        className="form-content__input" 
        type="text"
        name="question"
        />
        <label className="form-content__label">
            Réponse:
        </label>
        <Field
        className="form-content__input" 
        type="number"
        name="answer"
        />
        <label className="form-content__label">
            Tag:
        </label>
        <select 
        className="form-content__select" 
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
        <button 
        className="form-content__button" 
        type="submit"
        onClick={handleOnSubmit}
        >Ajouter</button>
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
