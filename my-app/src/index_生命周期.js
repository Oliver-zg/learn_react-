/*
 * @Description: 
 * @Author: Zhong Gang
 * @Version: 1.0.0.0
 * @Date: 2020-09-13 20:05:34
 * @LastEditTime: 2020-11-10 16:34:19
 * @LastEditors: Zhong Gang
 */
import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './App.css'
// import json from './feiyan.json'

class ComLife extends Component {
  constructor(props){
    super(props) 
    this.state = {
      msg:'hello world'
    }
  }
  componentWillMount() {
    console.log('will mount');
  }
  componentDidMount() {
    console.log('did mount');
  }
  componentDidUpdate() {
    console.log('did update')
  }
  shouldComponentUpdate() {
    //是否需要更新，如果需要返回真，不更新返回false
  }
  render() {
    return (
      <div>
        {this.state.msg}
        <button onClick={this.changeMsg}>更新数据</button>
      </div>
    )
  }
  
  changeMsg = () => {
    this.setState({
      msg: new Date().toLocaleString()
    })
  }


}
ReactDom.render(<ComLife/>,document.getElementById('root'))