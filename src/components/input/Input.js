import React, { useState } from 'react';
import './input.css';
import Translated from '../translated/Translated';


function Input() {
    const [inputValue, setInputValue] = useState('');

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    return(
        <section id='input'>
            <form action="">
                <input type="text" name='input-text' id='input-text' onChange={handleChange} />
            </form>
            <Translated input={inputValue} />
        </section>
    )
}

export default Input;