import React from 'react';
import './input.css';

function Input() {
    return(
        <section id='input'>
            <form action="">
                <label htmlFor="input-text">Text input</label>
                <input type="text" name='input-text' id='input-text' />
                <input type="submit" value="Translate" id="translate-button" />
            </form>
        </section>
    )
}

export default Input;