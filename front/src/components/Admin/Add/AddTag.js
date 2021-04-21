import Field from 'containers/Admin/Add/AddTagField';
import React from 'react';

const TagOption = ({onSubmit}) => (
    <React.Fragment>
        <label className="form-content__label">
            Créer un tag:
            <Field 
                className="form-content__item" 
                type="text"
                name="tag"
            />
        </label>
        <button 
            className="form-content__button" 
            type="button"
            onClick={onSubmit}
        >Valider</button>
    </React.Fragment>
);

export default TagOption;
