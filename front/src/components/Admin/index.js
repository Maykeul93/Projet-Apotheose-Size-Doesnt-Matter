import React from 'react';

import Question from 'containers/Admin/Question';
import Tag from './Tag';
import Role from './Role';
import Form from 'containers/Admin/Form';

import './styles.scss';

const Admin = () => (
    <main className="admin page__main">
        <h1 className="admin__title">Admin</h1>
        <div className="admin__content">
            <div className="admin__content-left">
                <Question />
                <Tag />
                <Role />
            </div>
            <div className="admin__content-right">
                <Form />
            </div>
        </div>
    </main>
);

export default Admin;
