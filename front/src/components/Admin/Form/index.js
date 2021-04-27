import React, { useEffect } from 'react';

import Add from 'components/Admin/Add'
import Update from 'components/Admin/Update';
import Delete from 'components/Admin/Delete';
import Role from 'containers/Admin/User/Role'
import Ban from 'containers/Admin/User/Ban'

import './styles.scss';
import { toast } from 'react-toastify';
import { setError, setMessage } from 'actions/admin';
import { useDispatch } from 'react-redux';

const Form = ({option, message, error }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        if(message.length > 0){
            toast.success(message)
            dispatch(setMessage(''))
        }else if (error.length > 0){
            toast.error(error)
            dispatch(setError(''))
        }
    },[message, error, dispatch])
    const componentOption = () => {

        switch (option) {

            case "add-question" : 
                return <Add sousOption="question"/>;

            case 'update-question': 
                return <Update sousOption="question"/>;

            case 'delete-question': 
                return <Delete sousOption="question"/>;

            case "add-tag" : 
                return <Add sousOption="tag"/>;

            case 'update-tag': 
                return <Update sousOption="tag"/>;

            case 'delete-tag': 
                return <Delete sousOption="tag"/>;

            case 'role-user': 
                return <Role />;

            case 'ban-user': 
                return <Ban />;
                
            default : 
                return <Add />;
        };
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return(
        <form className="form" onSubmit={handleSubmit}>
            {componentOption()}
        </form>
    )
};

export default Form;
