import React, { Component } from 'react';
//父子通信-类组件
class ChilCpn extends Component {
   // eslint-disable-next-line
   //默认实现方式，可以省略
  // constructor(props) {
  //   super(props) //将props传给父类保存
  //   // this.props = props
  // }
  render() {
    const {age,name} = this.props //内部将父组件显示绑定到当前this，所以this可以获取到父类props
    return (
      <div>
        <h2>子组件展示:{age},{name}</h2>
      </div>
    )
  }
}
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {  };
  // }
  render() {
    return (
      <div>
        <ChilCpn name="zg" age="18"/>
      </div>
    );
  }
}

export default App;