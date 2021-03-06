import React, { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md'
import { VscAccount } from 'react-icons/vsc';
import classNames from 'classnames';

const Role = ({setOption}) => {
    const [isDisplayed, setIsDisplayed] = useState(false)

    return(

        <div className="section">
            <h3 
                className="section__title"
                onClick={() => setIsDisplayed(!isDisplayed)}
            >
                <MdKeyboardArrowRight /> 
                Utilisateur &nbsp;
                <VscAccount />
                </h3>
            <ul className={classNames("section__list", {"isDisplayed" : isDisplayed})}>
                <li className="section__item">
                    <button 
                    type="button"
                    onClick={() => setOption('role-user')}
                    >Rôle</button>
                </li>
                <li className="section__item">
                    <button 
                    type="button"
                    className="red"
                    onClick={() => setOption('ban-user')}
                    >Bannir</button>
                </li>
            </ul>
        </div>
    )
};

export default Role;
