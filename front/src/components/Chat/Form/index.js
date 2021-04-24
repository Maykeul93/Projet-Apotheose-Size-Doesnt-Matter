import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Form = ({onSubmit}) => {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(inputValue);
        setInputValue('');
    }
    return(
        <form 
        className="chat__form"
        onSubmit={handleSubmit}
        >
            <input 
            className="input" 
            type="text" 
            onChange={(e)=> setInputValue(e.target.value)}
            value={inputValue}
            />
            <button 
            className="submit"
            type="submit" 
            >Envoyer</button>
        </form>
    )
};

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Form;
