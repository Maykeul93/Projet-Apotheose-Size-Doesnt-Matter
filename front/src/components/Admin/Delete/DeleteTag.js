import React from 'react';
import PropTypes from 'prop-types';

const DeleteTag = ({tags, tagId, onSelectChange, onSubmit}) => (
    <React.Fragment>
        <label className="form-content__label">
            Selectionner le tag à supprimer :
        </label>
        <select 
            className="form-content__select tag" 
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
            className="form-content__button red" 
            type="submit"
            onClick={onSubmit}
        >Supprimer</button>
    </React.Fragment>
);

DeleteTag.propTypes = {
    tags: PropTypes.array.isRequired,
    tagId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    onSelectChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default DeleteTag;
