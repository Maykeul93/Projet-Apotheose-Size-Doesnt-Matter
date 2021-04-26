import React from 'react';

const Role = ({users, userId, onSelectChange, onSubmit}) => (
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
                        {user.pseudo} - Role: {user.role} to { user.role === "user" ? "admin" : "user" }
                    </option>
                ))
            }
        </select>
        <button 
            className="form-content__button" 
            type="button"
            onClick={onSubmit}
            >Modifier
        </button>
    </div>
);

export default Role;
