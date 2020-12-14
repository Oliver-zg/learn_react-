import React, { Component } from 'react';

class Cpn extends Component {
  render() {
    return (
      <h2>....</h2>
    )
  }
  componentWillUnmount() {
    console.log('cpn willUnmount');
  }
}
class App extends Component {
  constructor() {
    super();
    console.log('第一步执行了constructor');
    this.state = {
      count: 0,
      isShow: true
    };
  }

  render() {
    console.log('第二步执行了render');
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.increment()}>+</button>
        <hr/>
        <button onClick={() => this.change()}>切换</button>
        {this.state.isShow && <Cpn/>}
      </div>
    );
  }

  componentDidMount() {
    console.log('第三步执行了componentDidMount');
  }

  increment() {
    let a = this.state.count;
    this.setState({
      count: a + 1,
    });
  }
  change() {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  componentDidUpdate() {
    console.log('数据发生更新时执行didUpdate');
  }
}

export default App;
