import React, { forwardRef, PureComponent, createRef } from 'react';

function getRenderTime(WrappedCpn) {
  return class extends PureComponent {
    render() {
      return <WrappedCpn {...this.props} />;
    }
  };
}

class Home extends PureComponent {
  render() {
    return <h2>Home</h2>;
  }
}

const Profile = forwardRef((props, ref) => {
  return <p {...props} ref={ref}>Profile</p>;
});

const EnhanceHome = getRenderTime(Home);
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.titleRef = createRef();
    this.profileRef = createRef();
  }
  render() {
    return (
      <div>
        <EnhanceHome name="zg" ref={this.titleRef}/>
        <Profile ref={this.profileRef}/>
        <button onClick={e => this.refClick()}>打印</button>
      </div>
    );
  }

  refClick() {
    console.log(this.titleRef.current);
    console.log(this.profileRef.current);
  }

}


export default App;
