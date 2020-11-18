/*
 * @Description: 
 * @Author: Zhong Gang
 * @Version: 1.0.0.0
 * @Date: 2020-09-13 20:05:34
 * @LastEditTime: 2020-11-09 10:18:03
 * @LastEditors: Zhong Gang
 */
import React from 'react';
import ReactDom from 'react-dom';
import './App.css'

//在父元素中使用state控制子元素的props，从而达到父元素数据传递给子元素

class ParentCom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive:true
    }
    this.changeShow = this.changeShow.bind(this)
  }
  render() {
    return (
      <div>
        <button onClick={this.changeShow}>控制子元素</button>
        <ChildCom isActive={this.state.isActive}/>
      </div>
    ) 
  }
  changeShow(){
    this.setState({
      isActive:!this.state.isActive
    })
  }

}

class ChildCom extends React.Component{
  constructor(props) {
    super(props)
    
  }

  render() {
    let strClass = null
    if(this.props.isActive == true) {
      strClass = 'active'
    }else{
      strClass = ''
    }
    return (
      <div className={strClass}>
        <h1>我是子元素</h1>
      </div>
    )
  }

}
ReactDom.render(<ParentCom/>,document.getElementById('root'))