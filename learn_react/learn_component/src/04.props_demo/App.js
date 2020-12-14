import React, { Component } from 'react';
import TabControl from './TabControl'
import '../App.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:['新款','精选','时尚'],
      currentIndex: 0
    }
  }
  
  render() {
    const { title,currentIndex } = this.state
    return (
      <div>
        <TabControl itemCick={index => this.itemCick(index)} title={title}/>
        <h2>{title[currentIndex]}</h2>
      </div>
    );
  }
  itemCick(index) { //接收子组件传来的数据
    this.setState({
      currentIndex: index
    })
  }
}

export default App;