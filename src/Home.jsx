import React, { Component, createElement } from 'react';
import './style.css'

class Home extends Component {
    render() {
        return (
            <div id='Minos'>
                <h1 id='hopeless'>0</h1>
                <input type="text" id='num1' placeholder='Num'/>
                <input type="text" id='num2' placeholder='Int'/>
                <button onClick={() => {
                    let nohope = document.getElementById('hopeless')
                    let num1 = document.getElementById('num1')
                    let num2 = document.getElementById('num2')
                    nohope.textContent = (Number(num1.value) + Number(num2.value));
                }}>+</button>
                <button onClick={() => {
                    let nohope = document.getElementById('hopeless')
                    let num1 = document.getElementById('num1')
                    let num2 = document.getElementById('num2')
                    nohope.textContent = (Number(num1.value) - Number(num2.value));
                }}>-</button>
                <button onClick={() => {
                    let nohope = document.getElementById('hopeless')
                    let num1 = document.getElementById('num1')
                    let num2 = document.getElementById('num2')
                    nohope.textContent = (Number(num1.value) / Number(num2.value));
                }}>/</button>
                <button onClick={() => {
                    let nohope = document.getElementById('hopeless')
                    let num1 = document.getElementById('num1')
                    let num2 = document.getElementById('num2')
                    nohope.textContent = (Number(num1.value) * Number(num2.value));
                }}>*</button>
                <button onClick={() => {
                    let nohope = document.getElementById('hopeless')
                    let num1 = document.getElementById('num1')
                    let num2 = document.getElementById('num2')
                    nohope.textContent = (Number(num1.value) ** Number(num2.value));
                }}>**</button>
                <button id='lol' onClick={() => {
                    let nohope = document.getElementById('hopeless')
                    let num1 = document.getElementById('num1')
                    nohope.textContent = (Number(num1.value) ** 0.5);
                }}>Sqrt√</button>
                <button id='zero' onClick={() => {
                    let nohope = document.getElementById('hopeless')
                    nohope.textContent = 0;
                }}>Set Zero</button>
                <button id='theseus' onClick={() =>{
                    console.log("Nothing will happen yet.");
                }}>DONT CLICK</button>
                <h1 id='meaningless'>No purpose</h1>
            </div>
        );
    }
}

export default Home;
