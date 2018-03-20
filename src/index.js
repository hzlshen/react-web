import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//JSX， 一种 JavaScript 的语法扩展
function formatName(user) {
    return user.firstName + '' +user.lastName;
}

const user ={
    firstName : '神威如狱',
    lastName : '不动的推动者'
};

const element = (
    <h1>
        Hello, {formatName(user)}
    </h1>
);

ReactDOM.render(
    element,document.getElementById('root')
)