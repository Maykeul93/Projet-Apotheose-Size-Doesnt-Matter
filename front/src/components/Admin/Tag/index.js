import React from 'react';

const Tag = () => (
    <div className="section">
        <h3 className="section__title">Thèmes</h3>
        <ul className="section__list">
            <li className="section__item">
                <button type="button">Ajouter</button>
            </li>
            <li className="section__item">
                <button type="button">Modifier</button>
            </li>
            <li className="section__item">
                <button type="button">Supprimer</button>
            </li>
        </ul>
    </div>
);

export default Tag;
