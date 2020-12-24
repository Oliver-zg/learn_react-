import React, { PureComponent } from 'react';

import { addAction, increAction } from './store/createActions';
import { connect } from './utils/connect';

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      num: 1
    }
  }

  render() {
    return (
      <div>
        <h1>总数：{this.props.counter}</h1>
        <button onClick={() => this.props.increment()}>+1</button>
        <span>你想加几</span>
        <input type="text" onChange={(e) => this.getNum(e)} />
        <button onClick={() => this.props.addAction(this.state.num)}>+</button>
      </div>
    );
  }

  getNum(e) {
    this.setState({
      num: Number(e.target.value),
    });
  }
 
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
};
const mapDispatchProps = dispatch => {
  return {
    increment: function() {
      dispatch(increAction());
    },
    addAction: function(num) {
      dispatch(addAction(num));
    }
  }
};

export default connect(mapStateToProps,mapDispatchProps)(App)
