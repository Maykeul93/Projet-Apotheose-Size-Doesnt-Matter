import React from 'react';

import Add from 'components/Admin/Add'
import Update from 'components/Admin/Update';
import Delete from 'components/Admin/Delete';

const Form = ({option}) => {
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
                
            default : 
                return <Add />;
        };
    };
    return(
        <form className="form">
            {componentOption()}
        </form>
    )
};

export default Form;
