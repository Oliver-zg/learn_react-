import React, { PureComponent } from 'react';
import store from './store/index';
import { addAction, subAction, increAction, decreAction } from './store/createActions';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: store.getState().counter,
      num: 1,
    };
  }
  componentDidMount() {
    //订阅
    this.unSub = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter,
      });
    });
  }
  componentWillUnmount() {
    //取消订阅
    this.unSub();
  }
  componentDidUpdate() {
    // store.subscribe(() => {
    //   this.setState
    // });
  }
  render() {
    return (
      <div>
        <h1>总数：{this.state.counter}</h1>
        <button onClick={() => this.increment()}>+1</button>
        <span>你想加几</span>
        <input type="text" onChange={(e) => this.getNum(e)} />
        <button onClick={() => this.addAction()}>+</button>
      </div>
    );
  }

  increment() {
    store.dispatch(increAction());
  }
  getNum(e) {
    this.setState({
      num: Number(e.target.value),
    });
  }
  addAction() {
    const { num } = this.state;
    store.dispatch(addAction(num));
  }
}

export default App;
