
import React,{Component,Fragment} from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      // <Fragment>
      //   <h2>当前计数:{this.state.counter}</h2>
      //   <button onClick={this.increment.bind(this)}>+1</button>
      //   <button onClick={this.decrement.bind(this)}>-1</button>
      // </Fragment>
      //短语法  标签里不能添加任何属性
      <>
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick={this.increment.bind(this)}>+1</button>
        <button onClick={this.decrement.bind(this)}>-1</button>
      </>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter+1
    })
  }

  decrement() {
    this.setState({
      counter: this.state.counter-1
    })
  }
}
