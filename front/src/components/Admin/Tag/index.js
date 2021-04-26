import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md'
import { FiAperture } from 'react-icons/fi'

const Tag = ({setOption}) => (
    <div className="section">
        <h3 className="section__title">
            <MdKeyboardArrowRight /> 
            Thèmes &nbsp;
            <FiAperture />
            
            </h3>
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
