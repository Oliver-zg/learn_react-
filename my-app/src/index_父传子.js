/*
 * @Description: 
 * @Author: Zhong Gang
 * @Version: 1.0.0.0
 * @Date: 2020-09-13 20:05:34
 * @LastEditTime: 2020-11-09 11:05:09
 * @LastEditors: Zhong Gang
 */
import React from 'react';
import ReactDom from 'react-dom';
import './App.css'

//子传父
class ParentCom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }
  render() {
    return (
      <div>
        <h1>子元素传递给父元素的数据：{this.state.data}</h1>
        <ChildCom setChildData={this.setChildData}/>
      </div>
    ) 
  }
  setChildData = (childData) => {
    this.setState({
      data: childData
    })
  }

}

class ChildCom extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      msg: "Hello World"
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.sendData}>传递给父元素</button>
        <button onClick={()=>{this.props.setChildData('直接调用')}}>传递给父元素</button>
        
      </div>
    )
  }
  //向父元素发送数据
  sendData = () => {
    console.log();
    this.props.setChildData(this.state.msg)
  }
}

ReactDom.render(<ParentCom/>,document.getElementById('root'))
