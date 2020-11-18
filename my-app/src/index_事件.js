/*
 * @Description: 
 * @Author: Zhong Gang
 * @Version: 1.0.0.0
 * @Date: 2020-09-13 20:05:34
 * @LastEditTime: 2020-11-10 09:41:45
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
    }
  }
  render() {
    return (
      <div >
        <form action="www.baidu.com">
          <div className="child">
            <h1>Hello World</h1>
            <button onClick={this.preventEvent}>提交</button>
            {/* 使用ES6箭头函数传递多个参数 */}
            <button onClick={ (e) => {this.preventEvent1('msg:hi',e)}}>提交</button>
            {/* 不使用箭头函数 */}
            <button onClick={ function(e) {this.preventEvent1('msg:hi',e)}.bind(this)}>提交</button>
          </div>
        </form>

      </div>
    ) 
  }
  preventEvent = (e) => {
    console.log(e);
    //e是react代理的原生事件对象
    //不能用return false; 阻止默认行为
    e.preventDefault();
  }
  preventEvent1 = (msg,e) => {
    console.log(msg,e);
    e.preventDefault()
  }
}

ReactDom.render(<ParentCom/>,document.getElementById('root'))
