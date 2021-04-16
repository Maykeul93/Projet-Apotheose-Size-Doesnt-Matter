import React from 'react';

import './styles.scss';

const Admin = () => (
    <main className="admin page__main">
        <h1 className="admin__title">Admin</h1>
        <div className="admin__content">
            <div className="admin__content-left">
                <div className="section">
                    <h3 className="section__title">Questions</h3>
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
                <div className="section">
                    <h3 className="section__title">Utilisateur</h3>
                    <ul className="section__list">
                        <li className="section__item">
                            <button type="button">Rôle</button>
                        </li>
                        <li className="section__item">
                            <button type="button">Bannir</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="admin__content-right">
                
            </div>
        </div>
    </main>
);

export default Admin;
