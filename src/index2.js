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

//前面渲染的都是dom标签
//也可以自定义用户组件
const element1 = <Welcome name="Sara" />;
//将JSX属性作为单个对象传递给该组件,这个对象称之为“props”。
function Welcome(props){
    return <h1>Hello ,{props.name}</h1>
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);

//注意：组件名称必须以大写字母开头。

//组合组件
function App(){
    return (

        <div>
            
        </div>
    )
}




ReactDOM.render(
    element,document.getElementById('root')
)