import Field from 'containers/Admin/Update/UpdateTagField';
import React from 'react';

const UpdateQuestion = ({tags, tagId, onSelectTagChange, onSubmit}) => (
    <React.Fragment>
        <label className="form-content__label">
            Selectionner le tag à modifier :
        </label>
        <select 
            className="form-content__item" 
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
        className="form-content__item"
        type="text"
        name='tag'
         />
        <button 
        className="form-content__button" 
        type="button"
        onClick={onSubmit}
        >Valider</button>
    </React.Fragment>
);

export default UpdateQuestion;
