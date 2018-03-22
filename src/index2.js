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

function Welcome(props) {
    return <h1>Hello ,{props.name}</h1>
}

class Welcome extends React.Component{
    render(){
        return <h1>你好啊小伙子,{this.props.name}</h1>
    }
}




ReactDOM.render(
    element,document.getElementById('root')
)