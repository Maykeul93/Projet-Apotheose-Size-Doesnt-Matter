import Field from 'containers/Admin/Update/UpdateTagField';
import React from 'react';
import PropTypes from 'prop-types';

const UpdateTag = ({tags, tagId, onSelectTagChange, onSubmit}) => (
    <React.Fragment>
        <label className="form-content__label">
            Selectionner le tag à modifier :
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
        <label className="form-content__label">
            Modifier le tag: 
        </label>
        <Field 
        className="form-content__input"
        type="text"
        name='tag'
         />
        <button 
        className="form-content__button" 
        type="submit"
        onClick={onSubmit}
        >Modifier</button>
    </React.Fragment>
);

UpdateTag.propTypes = {
    tags: PropTypes.array.isRequired,
    tagId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    onSelectTagChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default UpdateTag;
