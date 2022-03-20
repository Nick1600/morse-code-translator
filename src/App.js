import React from 'react';
import './app.css';
import Input from './components/input/Input';

function App() {
    return (
        <body>
            <header>
                <h1 id='heading'>
                    Morse Code Translator
                </h1>
            </header>
            <main>
                <p id='description'>
                    Enter text and see it translated into Morse Code!
                </p>
                <Input />
            </main>
        </body>
    )
}

export default App