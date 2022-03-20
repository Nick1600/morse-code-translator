import React from 'react';
import './translated.css';
import Translator from '../Translator';

function Translated(props) {
    const morseMessage = Translator(props.input);
    
    return(
        <section>
            <p>
                {morseMessage}
            </p>
        </section>
    )
}

export default Translated;