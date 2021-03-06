import React, { useEffect } from 'react';

import Question from 'containers/Admin/Question';
import Tag from 'containers/Admin/Tag';
import Form from 'containers/Admin/Form';
import User from 'containers/Admin/User';
import Message from 'components/Admin/Message';

import './styles.scss';
import { useHistory } from "react-router-dom";

const Admin = ({setAdmin, role}) => {
    const history = useHistory();
    console.log(role)
    if(role !== 'admin'){
        history.push('/')
    }
    useEffect(()=>{
        setAdmin()
    },[setAdmin])
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
                    <Message />
                </div>
            </div>
        </main>
    )
};

export default Admin;
