import React, { useEffect } from 'react';

import Question from 'containers/Admin/Question';
import Tag from 'containers/Admin/Tag';
import Form from 'containers/Admin/Form';
import User from 'containers/Admin/User';

import './styles.scss';
import { setAdmin } from 'actions/admin';
import { useDispatch } from 'react-redux';

const Admin = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setAdmin())
    },[dispatch])
    return(

        <main className="admin page__main">
            <h1 className="admin__title">Admin</h1>
            <div className="admin__content">
                <div className="admin__content-left">
                    <Question />
                    <Tag />
                    <User />
                </div>
                <div className="admin__content-right">
                    <Form />
                </div>
            </div>
        </main>
    )
};

export default Admin;
