import React from 'react';

const Tag = ({setOption}) => (
    <div className="section">
        <h3 className="section__title">Thèmes</h3>
        <ul className="section__list">
            <li className="section__item">
                <button 
                type="button"
                onClick={() => setOption('add-tag')}
                >Ajouter</button>
            </li>
            <li className="section__item">
                <button 
                type="button"
                onClick={() => setOption('update-tag')}
                >Modifier</button>
            </li>
            <li className="section__item">
                <button 
                type="button"
                onClick={() => setOption('delete-tag')}
                >Supprimer</button>
            </li>
        </ul>
    </div>
);

export default Tag;
