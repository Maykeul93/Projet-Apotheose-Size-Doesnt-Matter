import React from 'react';

const UpdateQuestion = () => (
    <React.Fragment>
        <label className="form-content__label">
            Selectionner la question à modifier :
        </label>
        <select className="form-content__item" name="question">
            <option value="test">test</option>
            <option value="test2">test2</option>
        </select>
        <label className="form-content__label">
            Modifier la question:
        </label>
        <input className="form-content__item" />
        <label className="form-content__label">
            Modifier la réponse:
        </label>
        <input className="form-content__item" />
        <button className="form-content__button" type="submit">Valider</button>
    </React.Fragment>
);

export default UpdateQuestion;
