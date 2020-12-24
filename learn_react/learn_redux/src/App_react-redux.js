import React, { PureComponent } from 'react';
import axios  from 'axios'
import { addAction, increAction,bannersAction } from './store/createActions';
import { connect } from 'react-redux';

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      num: 1
    }
  }
  componentDidMount() {
    axios({
      url: 'http://123.207.32.32:8000/home/multidata'
    }).then(res => {
      const data = res.data.data
     this.props.changeBanners(data.banner.list)
    })
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
    changeBanners(banners) {
      dispatch(bannersAction(banners))
    }
  }
};

export default connect(mapStateToProps,mapDispatchProps)(App)
