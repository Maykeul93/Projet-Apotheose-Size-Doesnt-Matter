import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md'
import { VscAccount } from 'react-icons/vsc';

const Role = ({setOption}) => (
    <div className="section">
        <h3 className="section__title">
            <MdKeyboardArrowRight /> 
            Utilisateur &nbsp;
            <VscAccount />
            </h3>
        <ul className="section__list">
            <li className="section__item">
                <button 
                type="button"
                onClick={() => setOption('role-user')}
                >Rôle</button>
            </li>
            <li className="section__item">
                <button 
                type="button"
                onClick={() => setOption('ban-user')}
                >Bannir</button>
            </li>
        </ul>
    </div>
);

export default Role;
