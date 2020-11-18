/*
 * @Description: 
 * @Author: Zhong Gang
 * @Version: 1.0.0.0
 * @Date: 2020-09-13 20:05:34
 * @LastEditTime: 2020-11-08 12:31:38
 * @LastEditors: Zhong Gang
 */
import React from 'react';
import ReactDom from 'react-dom';
/* 
const element = <h1>hello world</h1>

ReactDom.render(element,document.getElementById('root')); */
// function Hello() { 
//   return (<h1>hello world</h1>)
//  }
// function Welcome(props) {
//   return (<h1>Hello,{props.name} Your age is {props.age}</h1>)
// }

// let h = <h1>Hello world</h1>; //使用JSX语法 创建JS元素对象

// function App() {
//   return (
//     <div>
//       <Hello></Hello>
//       <Welcome name="Oliver" age={18}></Welcome>
//       <h/>
//     </div>
//   )
// }
// //JSX语法 
// const el = <App/> //JS普通对象

// ReactDom.render(el,document.getElementById('root'));

//实现页面时刻的显示

// function clock() {
//   let time = new Date().toLocaleString();
//   let ele = <h1>现在时间是{time}</h1>;
//   ReactDom.render(ele,document.getElementById('root'));

// }
// setInterval(() => {
//   clock();
// },1000)

//react函数式组件
function Clock(props) {
  return (<h1>现在时间是{props.date}</h1>)
}

function run() {
  ReactDom.render(<Clock date={new Date().toLocaleString()}/>,document.getElementById('root'))
}

setInterval(run,1000)