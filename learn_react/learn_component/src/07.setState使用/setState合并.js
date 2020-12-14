import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <button onClick={e => this.changeText()}>改变</button>
      </div>
    )
  }

  changeText() {
    //会进行合并 只加1次
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // this.setState({
    //   counter: this.state.counter + 1
    // })

    //需要进行累加
    this.setState((preState, props) => {
      return {
        counter: preState.counter + 1
      }
    })
    this.setState((preState, props) => {
      return {
        counter: preState.counter + 1
      }
    })
    this.setState((preState, props) => {
      return {
        counter: preState.counter + 1
      }
    })
  }
}