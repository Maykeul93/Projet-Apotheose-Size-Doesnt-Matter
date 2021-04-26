import React from 'react';

const Ban = ({users, userId, onSelectChange, onSubmit}) => (
    <div className="form-content">
        <label className="form-content__label">
            Utilisateur :
        </label>
        <select 
        className="form-content__select" 
        name="user"
        value ={userId} 
        onChange={(e) => onSelectChange(e.target.value)}
        >
            {
                users.map((user) => (
                    <option 
                    key={user.id}
                    value={user.id}
                    >
                        {user.pseudo} - Role: {user.role}
                    </option>
                ))
            }
        </select>
        <button 
            className="form-content__button" 
            type="button"
            onClick={onSubmit}
            >Bannir
        </button>
    </div>
);

export default Ban;