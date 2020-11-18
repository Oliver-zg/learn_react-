/*
 * @Description:
 * @Author: Zhong Gang
 * @Version: 1.0.0.0
 * @Date: 2020-11-10
 * @LastEditTime: 2020-11-17 17:06:05
 * @LastEditors: Zhong Gang
 */
import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux'
import './App.css';


const reducer = function(state={num:0},action) {
  switch(action.type) { //定义动作对应行为 
    case 'add':
      state.num++;
      break;
    case 'decrement':
      state.num--;
      break;
  }
  return {...state}; 
}
//创建仓库
const store = createStore(reducer)

function add() {
  //通过仓库的方法dispatch进行修改数据
  store.dispatch({type:'add'}) //通过动作修改数据
}
function decrement() {
  //通过仓库的方法dispatch进行修改数据
  store.dispatch({type:'decrement'})
}
//函数式计数器
function Counter(props) {
  return (
    <div>
      {/* store.getState 获取数据 */}
      <h1>计数数量：{store.getState().num}</h1>
      <button onClick={add}>计数+1</button>
      <button onClick={decrement}>计数-1</button>
    </div>
  )
}
ReactDom.render(<Counter />, document.getElementById('root'));

//监听数据变化 重新渲染视图
store.subscribe(() => {
ReactDom.render(<Counter />, document.getElementById('root'));

})