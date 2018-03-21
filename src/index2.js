import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//渲染页面
//传入 ReactDOM.render() 方法
function tick() {
    const element = (
        <div>
            <h1>你好，小伙子</h1>
            <h2>这是一个帅气的小伙子</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}


ReactDOM.render(
    element,document.getElementById('root')
)