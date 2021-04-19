import React from 'react';

import Add from 'components/Admin/Add'
import Update from 'components/Admin/Update';
import Delete from 'components/Admin/Delete';

const Form = ({option}) => {
    const componentOption = () => {

        switch (option) {

            case "add-question" : 
                return <Add />;

            case 'update-question': 
                return <Update />;

            case 'delete-question': 
                return <Delete />;
                
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
