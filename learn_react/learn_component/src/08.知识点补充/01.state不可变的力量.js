import React, { Component,PureComponent } from 'react';

class App extends PureComponent {
  constructor(props) {
    super(props)
    //引用类型
    this.state = {
      friends:[
        {name:'李二狗', age: 20},
        {name: '狗剩', age: 25},
        {name: '王二麻子', age: 30}
      ]
    }
  }
  // shouldComponentUpdate(newProps,newState) {
  //   //friends保存的是数组的引用，指向数组实际存放的内存地址
  //   if(newState.friends !== this.state.friends) {
  //     return true
  //   } else {
  //     return false
  //   }
    
  // }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.friends.map((item,index) => {
              return (
              <li key={item.name}>姓名：{item.name} 
              年龄：{item.age}
              <button onClick={e => this.incrementAge(index)}>年龄+1</button>
              </li>
              )
            })
          }
        </ul>
        <button onClick={e => this.insertData()}>添加数据</button>
      </div>
    );
  }

  insertData() {
    const newData = {name:'王五',age:'22'}
    //开发中不要这样做
    // this.setState({
    //   friends: this.state.friends.push(newData)
    // })
    //推荐做法
    this.setState({
      friends: [...this.state.friends,newData] //一个新的数组
    })
  }
  incrementAge(index) {
    const newFriends = [...this.state.friends];
    newFriends[index].age += 1;
    this.setState({
      friends: newFriends
    })
  }
}

export default App;