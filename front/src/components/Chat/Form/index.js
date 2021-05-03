import React, { useState } from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';
import PropTypes from 'prop-types';
import './styles.scss';

const Form = ({onSubmit}) => {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.length > 0) {
            onSubmit(inputValue);
            setInputValue('');
        }
    }
    return(
        <form 
        className="chatForm"
        onSubmit={handleSubmit}
        >
            <input 
            className="chatForm__input" 
            type="text"
            placeholder="Mon message..."
            onFocus={(e) => e.target.placeholder = ''}
            onBlur={(e) => e.target.placeholder = 'Mon message...'}
            onChange={(e)=> setInputValue(e.target.value)}
            value={inputValue}
            />
            <button 
            className="chatForm__submit"
            type="submit" 
            >
                <RiSendPlaneFill
                    size="25"
                    color="white"
                />
            </button>
        </form>
    )
};

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Form;
