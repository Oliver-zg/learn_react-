/*
 * @Description: 
 * @Author: Zhong Gang
 * @Version: 1.0.0.0
 * @Date: 2020-09-13 20:05:34
 * @LastEditTime: 2020-11-09 16:54:44
 * @LastEditors: Zhong Gang
 */
import React from 'react';
import ReactDom from 'react-dom';
import './App.css'

function UserGreet(props) {
return (<h1>{props.name} 欢迎登录</h1>)
}

function UserLogin(props) {
  return (<h1>请先登录</h1>)
}

class ParentCom extends React.Component {
  constructor(props){
    super(props)
    this.state={
      isLogin:false,
      name: 'Oliver'
    }
  }
  render() {
    //条件渲染
    if(this.state) {
      return <UserGreet name={this.state.name}/>
    }else{
      return <UserLogin />
    }
  }
}
//列表渲染
/* let arr = ['1','2','3'].map(item => <li>item</li>)
class Welcome extends React.Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <div>
        <ul>
          {arr}
        </ul>
      </div>
    )
  }
} */
function ListItem(props) {
  return (
    <li>
    <h2>{props.index}{props.data.title}</h2>
    <h3>{props.data.score}</h3>
  </li>
  )
}
//类组件 包含点击事件
class ListItemClick extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let list = this.props.data.map((item,index) => {
      return (
        <li onClick={(e)=> {this.clickEvent(e,item)}}>
          <h2>{item.title}</h2>
          <h3>{item.score}</h3>
        </li>
      )
    })
    return (
      <div>
        {list}
      </div>
    )
  }
  clickEvent(e,data) {
    alert(data.title,data.score)
  }
}
class Welcome extends React.Component {
  constructor(props) {
    super()
    this.state = {
      list:[
        {
          title:'海王',
          score:'4'
        },
        {
          title:'变形金刚',
          score:'5'
        }
      ]
    }
  }
  render() {
  let list = this.state.list.map((item,index) => <ListItem data={item} key={index}/>)
    return (
      <div>
        <h1>电影推荐</h1>
        {list}
        <h1>点击弹窗</h1>
        <ListItemClick data={this.state.list}></ListItemClick>
      </div>
    )
  }
}
ReactDom.render(<Welcome/>,document.getElementById('root'))