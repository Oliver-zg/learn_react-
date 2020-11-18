/*
 * @Description: 
 * @Author: Zhong Gang
 * @Version: 1.0.0.0
 * @Date: 2020-09-13 20:05:34
 * @LastEditTime: 2020-11-09 10:16:41
 * @LastEditors: Zhong Gang
 */
import React from 'react';
import ReactDom from 'react-dom';
import './App.css'

class Clock extends React.Component{
  constructor(props) {
    super(props)
    //构造函数初始化数据
    this.state = {
      time: new Date().toLocaleString()
    }
    console.log(this.state);
  }
  //渲染函数
  render(){
    return (
      <div>
        <h1>现在时间是{this.state.time}</h1>
      </div>
    )
  } 
  //生命周期函数
  componentDidMount() {
    setInterval(() => {
      // this.state.time = new Date().toLocaleString() 错误的方式
      this.setState({
        time: new Date().toLocaleString()
      })
    },1000)
  }
}
/* setInterval(() => {
  ReactDom.render(<Clock />,document.getElementById('root'))
},1000) */
ReactDom.render(<Clock />,document.getElementById('root'))
