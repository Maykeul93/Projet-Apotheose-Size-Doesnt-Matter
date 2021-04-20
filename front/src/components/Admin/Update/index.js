import React from 'react';
import UpdateQuestion from 'containers/Admin/Update/UpdateQuestion';
import UpdateTag from './UpdateTag';

const Update = ({sousOption}) => {
    const component = () => {
        switch(sousOption) {
            case 'question':
                return <UpdateQuestion />
            case 'tag':
                return <UpdateTag />
            default :
            return <UpdateQuestion />;
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

export default Update;
