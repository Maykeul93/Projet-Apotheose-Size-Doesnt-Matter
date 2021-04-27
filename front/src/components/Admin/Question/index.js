import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdKeyboardArrowRight } from 'react-icons/md'
import { VscQuestion } from 'react-icons/vsc'
import classNames from 'classnames';

const Question = ({setOption}) => {
    const [isDisplayed, setIsDisplayed] = useState(false)
    return(
        <div className="section">
            <h3 
                className="section__title"
                onClick={() => setIsDisplayed(!isDisplayed)}
            > 
            <MdKeyboardArrowRight /> 
            Questions &nbsp;
            <VscQuestion />
            </h3>
            <ul className={classNames("section__list", {"isDisplayed" : isDisplayed})}>
                <li className="section__item">
                    <button 
                    type="button"
                    onClick={() => setOption('add-question')}
                    >Ajouter</button>
                </li>
                <li className="section__item">
                    <button 
                    type="button"
                    onClick={() => setOption('update-question')}
                    >Modifier</button>
                </li>
                <li className="section__item">
                    <button 
                    type="button"
                    onClick={() => setOption('delete-question')}
                    >Supprimer</button>
                </li>
            </ul>
        </div>
    )
};

Question.propTypes = {
    setOption: PropTypes.func,
};

Question.defaultProps = {
    setOption: () => {},
};

export default Question;
