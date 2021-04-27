import React, { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md'
import { FiAperture } from 'react-icons/fi'
import classNames from 'classnames';

const Tag = ({setOption}) => {
    const [isDisplayed, setIsDisplayed] = useState(false)

    return (

        <div className="section">
            <h3 
                className="section__title"
                onClick={() => setIsDisplayed(!isDisplayed)}
            >
                <MdKeyboardArrowRight /> 
                Thèmes &nbsp;
                <FiAperture />
                
                </h3>
            <ul className={classNames("section__list", {"isDisplayed" : isDisplayed})}>
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
    )
};

export default Tag;
