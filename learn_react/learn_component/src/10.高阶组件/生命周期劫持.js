import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

function getRenderTime(WrappedCpn) {
  return class extends PureComponent {
    componentWillMount() {
      this.beginTime = Date.now();
    }

    render() {
      return <WrappedCpn {...this.props}/>;
    }

    componentDidMount() {
      this.endTime = Date.now();
      const interval = this.endTime - this.beginTime;
      console.log('====================================');
      console.log(this.props,interval);
      console.log('====================================');
    }
  };
}

class Home extends PureComponent {
  render() {
    return <h2>Home</h2>
  }
}
// class Home extends PureComponent {
//   //即将渲染
//   componentWillMount() {
//     this.beginTime = Date.now();
//   }
//   render() {
//     return <h2>Home</h2>
//   }
//   componentDidMount() {
//     this.endTime = Date.now();
//     const interval = this.endTime - this.beginTime;
//     console.log('====================================');
//     console.log(interval);
//     console.log('====================================');
//   }
// }
const EnhanceHome = getRenderTime(Home)
class App extends PureComponent {
  render() {
    return (
      <div>
        <EnhanceHome name="zg"/>
      </div>
    );
  }
}

App.propTypes = {};

export default App;
