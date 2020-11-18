/*
 * @Description:
 * @Author: Zhong Gang
 * @Version: 1.0.0.0
 * @Date: 2020-11-10
 * @LastEditTime: 2020-11-18 10:24:31
 * @LastEditors: Zhong Gang
 */
import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider,connect} from 'react-redux';

class Counter extends React.Component {
  render() {
    const value = this.props.value;
    const onAddClick = this.props.onAddClick;
    const onDeClick = this.props.onDeClick;
    console.log(this.props);
    return (
      <div>
        <h1>计数的数量{value}</h1>
        <button onClick={onAddClick}>+1</button>
        <button onClick={onDeClick}>-5</button>
        
      </div>
    )
  }
}

//对数据操作的动作
let AcitonObj = {
  add: function(state,action) {
      state.num++;
      return state;
  },
  decrement: function(state,action) {
    state.num -= action.num;
    return state;
  }
}
function reducer(state={num:0},action) {
  console.log(action.type);
  //判断是否是第一次初始化
  if(action.type.indexOf('redux') == -1) {
    state = AcitonObj[action.type](state,action)
    return {...state}
  }else{
    return {...state}
  }

}

const store = createStore(reducer)

//将state映射到props
function mapStateToProps(state) {
  return {
    value: state.num
  }
}

//将修改states数据的方法 映射到props 默认会传入store里的dispatch方法
function mapDispathToProps(dispatch) {
  return {
    onAddClick: ()=>{dispatch({type:'add'})}, //传入一个action 与onAddClick进行关联
    onDeClick: ()=>{dispatch({type: 'decrement',num:5})}
  }
}
// 将上面方法映射到组件上，形成新的组件 Counter为UI组件
const App = connect(mapStateToProps,mapDispathToProps)(Counter)

//Provider：自动将store里的state和组件进行关联
ReactDom.render(<Provider store={store}>
  <App />
</Provider>,document.getElementById('root'));