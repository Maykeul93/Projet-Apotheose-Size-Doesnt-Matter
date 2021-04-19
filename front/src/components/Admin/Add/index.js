import React from 'react';

const Add = () => (
    <div className="form-content">
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
                <option value="test">Test</option>
                <option value="test2">Test2</option>
            </select>
        </label>
        <button type="submit">Valider</button>
    </div>
);

export default Add;
