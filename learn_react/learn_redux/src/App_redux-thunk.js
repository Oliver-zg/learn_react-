import React, { PureComponent } from 'react';

import { addAction, increAction,getHomeDataAction } from './store/createActions';
import { connect } from 'react-redux';

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      num: 1
    }
  }
  componentDidMount() {
    this.props.getHomeData()
  }
  render() {
    return (
      <div>
        <h1>总数：{this.props.counter}</h1>
        <button onClick={() => this.props.increment()}>+1</button>
        <span>你想加几</span>
        <input type="text" onChange={(e) => this.getNum(e)} />
        <button onClick={() => this.props.addAction(this.state.num)}>+</button>
        <hr/>
        <ul>
          {
            this.props.banners.map(item => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
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
    counter: state.counter,
    banners: state.banners
  }
};
const mapDispatchProps = dispatch => {
  return {
    increment: function() {
      dispatch(increAction());
    },
    addAction: function(num) {
      dispatch(addAction(num));
    },
    getHomeData() {
      dispatch(getHomeDataAction)
    }
  }
};

export default connect(mapStateToProps,mapDispatchProps)(App)
