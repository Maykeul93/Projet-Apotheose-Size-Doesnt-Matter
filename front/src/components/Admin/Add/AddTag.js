import React from 'react';

const TagOption = () => (
    <React.Fragment>
        <label className="form-content__label">
            Créer un tag:
            <input className="form-content__item" type="text" />
        </label>
        <button className="form-content__button" type="submit">Valider</button>
    </React.Fragment>
);

export default TagOption;
