import React from 'react';

const DeleteTag = ({tags, tagId, onSelectChange, onSubmit}) => (
    <React.Fragment>
        <label className="form-content__label">
            Selectionner le tag à supprimer :
        </label>
        <select 
            className="form-content__item" 
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
            type="button"
            onClick={onSubmit}
        >Valider</button>
    </React.Fragment>
);

export default DeleteTag;
