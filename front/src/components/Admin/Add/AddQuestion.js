import React from 'react';

const QuestionOption = ({tags}) => (
    <React.Fragment>
        <label className="form-content__label">
            Question:
            <input className="form-content__item" type="text" />
        </label>
        <label className="form-content__label">
            Réponse:
            <input className="form-content__item" type="text" />
        </label>
        <label className="form-content__label">
            Tag:
            <select className="form-content__item" name="tag" >
                {
                    tags.map((tag) => (
                        <option value={tag.name}>{tag.name}</option>
                    ))
                }
            </select>
        </label>
        <button className="form-content__button" type="submit">Valider</button>
    </React.Fragment>
);

export default QuestionOption;
