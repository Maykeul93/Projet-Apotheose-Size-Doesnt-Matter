import React from 'react';

const Delete = () => (
    <div className="form-content">
        <label className="form-content__label">
            Selectionner la question à supprimer :
        </label>
        <select className="form-content__item" name="question">
            <option value="test">test</option>
            <option value="test2">test2</option>
        </select>
        <button className="form-content__button" type="submit">Valider</button>

    </div>
);

export default Delete;
