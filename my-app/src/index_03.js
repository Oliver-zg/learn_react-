/*
 * @Description: 
 * @Author: Zhong Gang
 * @Version: 1.0.0.0
 * @Date: 2020-09-13 20:05:34
 * @LastEditTime: 2020-11-12 16:54:23
 * @LastEditors: Zhong Gang
 */
import React from 'react'
import ReactDom from 'react-dom'
import './App.css'

// const expStyle = {
//   backgroundColor:"skyblue",
//   border:"1px solid red"
// }

// let a = ['bgred','text'].join(" ")
// let ele = (
//   // <div>
//   //   <h1 style={expStyle}>Hello World</h1>
//   // </div>
//   <div>
//     <h1 className={a}>Hello World</h1>
//   </div>

// )
//函数组件
function Childcom(props) {
  const weather = props.weather
  console.log(props);
  const isGo = weather=='下雨'?'不出门':'出门'
  return (
    <div>
      <h1>Hello</h1>
      <div>
        <h2>今天是否出门？</h2>
        <span>{isGo}</span>
      </div>
    </div>
  )
}
//类组件
class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello World 类组件</h2>
        <Childcom weather={this.props.weather}/>
        <h2>Hello:{this.props.name}</h2>
      </div>
    )
  }
}
ReactDom.render(<HelloWorld weather="下雨" name="Oliver"/>,document.getElementById('root'))