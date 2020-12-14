import React, { Component } from 'react';
//父子通信-函数组件
function ChildCpn(props) {
  const { name, age } = props;
  return (
  <h2>{name + age}</h2>
  )
}
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {  };
  // }
  render() {
    return (
      <div>
        <ChildCpn name="zg" age="18" />
      </div>
    );
  }
}

export default App;
