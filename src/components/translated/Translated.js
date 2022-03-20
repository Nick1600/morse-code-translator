import React from 'react';
import './translated.css';
import Translator from '../Translator';

function Translated(props) {
    const morseMessage = Translator(props.input);
    
    return(
        <section id='morse-container'>
            <p id='morse-message'>
                {morseMessage}
            </p>
        </section>
    )
}

export default Translated;