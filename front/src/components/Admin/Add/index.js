import React from 'react';
import AddQuestion from 'containers/Admin/Add/AddQuestion';
import AddTag from 'containers/Admin/Add/AddTag';

const Add = ({sousOption}) => {
    const component = () => {
        switch(sousOption) {
            case 'question':
                return <AddQuestion />
            case 'tag':
                return <AddTag />
            default :
            return <AddQuestion />;
        }
    }
    return (
        <div className="form-content">
            {
                component()
            }

        </div>
    )
};

export default Add;
