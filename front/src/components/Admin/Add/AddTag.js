import Field from 'containers/Admin/Add/AddTagField';
import React from 'react';
import PropTypes from 'prop-types';

const TagOption = ({onSubmit}) => {

    return(
        <React.Fragment>
            <label className="form-content__label">
                Créer un tag:
            </label>
            <Field 
                className="form-content__input" 
                type="text"
                name="tag"
            />
            <button 
                className="form-content__button" 
                type="submit"
                onClick={onSubmit}
            >Ajouter</button>
        </React.Fragment>
    )
};

TagOption.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default TagOption;
