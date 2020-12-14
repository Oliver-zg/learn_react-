import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello World"
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={e => this.changeText()}>改变文本</button>
      </div>
    )
  }

  changeText() {
    this.setState({
      message: '你好啊'
    })
    console.log(this.state.message); //Hello World

    setTimeout(() => {
      console.log(this.state.message);// 你好啊
    },1000)
  }
}