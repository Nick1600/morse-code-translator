import React from 'react';
import './translated.css';
import morseIndex from '../Morse-index'

function Translated(props) {
    const input = props.input;
    const mixedInputArr = input.split("");
    const inputArr = mixedInputArr.map((letter) => letter.toLowerCase());

    let morseMessage = [''];
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] === 'a') {
            morseMessage.push(morseIndex.a);
        } else if (inputArr[i] === 'b') {
            morseMessage.push(morseIndex.b);
        } else if (inputArr[i] === 'c') {
            morseMessage.push(morseIndex.c);
        } else if (inputArr[i] === 'd') {
            morseMessage.push(morseIndex.d);
        } else if (inputArr[i] === 'e') {
            morseMessage.push(morseIndex.e);
        } else if (inputArr[i] === 'f') {
            morseMessage.push(morseIndex.f);
        } else if (inputArr[i] === 'g') {
            morseMessage.push(morseIndex.g);
        } else if (inputArr[i] === 'h') {
            morseMessage.push(morseIndex.h);
        } else if (inputArr[i] === 'i') {
            morseMessage.push(morseIndex.i);
        } else if (inputArr[i] === 'j') {
            morseMessage.push(morseIndex.j);
        } else if (inputArr[i] === 'k') {
            morseMessage.push(morseIndex.k);
        } else if (inputArr[i] === 'l') {
            morseMessage.push(morseIndex.l);
        } else if (inputArr[i] === 'm') {
            morseMessage.push(morseIndex.m);
        } else if (inputArr[i] === 'n') {
            morseMessage.push(morseIndex.n);
        } else if (inputArr[i] === 'o') {
            morseMessage.push(morseIndex.o);
        } else if (inputArr[i] === 'p') {
            morseMessage.push(morseIndex.p);
        } else if (inputArr[i] === 'q') {
            morseMessage.push(morseIndex.q);
        } else if (inputArr[i] === 'r') {
            morseMessage.push(morseIndex.r);
        } else if (inputArr[i] === 's') {
            morseMessage.push(morseIndex.s);
        } else if (inputArr[i] === 't') {
            morseMessage.push(morseIndex.t);
        } else if (inputArr[i] === 'u') {
            morseMessage.push(morseIndex.u);
        } else if (inputArr[i] === 'v') {
            morseMessage.push(morseIndex.v);
        } else if (inputArr[i] === 'w') {
            morseMessage.push(morseIndex.w);
        } else if (inputArr[i] === 'x') {
            morseMessage.push(morseIndex.x);
        } else if (inputArr[i] === 'y') {
            morseMessage.push(morseIndex.y);
        } else if (inputArr[i] === 'z') {
            morseMessage.push(morseIndex.z);
        } else if (inputArr[i] === '1') {
            morseMessage.push(morseIndex.one);
        } else if (inputArr[i] === '2') {
            morseMessage.push(morseIndex.two);
        } else if (inputArr[i] === '3') {
            morseMessage.push(morseIndex.three);
        } else if (inputArr[i] === '4') {
            morseMessage.push(morseIndex.four);
        } else if (inputArr[i] === '5') {
            morseMessage.push(morseIndex.five);
        } else if (inputArr[i] === '6') {
            morseMessage.push(morseIndex.six);
        } else if (inputArr[i] === '7') {
            morseMessage.push(morseIndex.seven);
        } else if (inputArr[i] === '8') {
            morseMessage.push(morseIndex.eight);
        } else if (inputArr[i] === '9') {
            morseMessage.push(morseIndex.nine);
        } else if (inputArr[i] === '0') {
            morseMessage.push(morseIndex.zero);
        } else if (inputArr[i] === ' ') {
            morseMessage.push(morseIndex.space);
        }
    }


    return(
        <section>
            <p>
                {morseMessage}
            </p>
        </section>
    )
}

export default Translated;