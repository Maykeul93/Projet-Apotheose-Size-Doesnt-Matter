import React from 'react';
import DeleteQuestion from './DeleteQuestion';
import DeleteTag from './DeleteTag';

const Delete = ({sousOption}) => {
    const component = () => {
        switch(sousOption) {
            case 'question':
                return <DeleteQuestion />
            case 'tag':
                return <DeleteTag />
            default :
            return <DeleteQuestion />;
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

export default Delete;
