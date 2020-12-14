import React, { PureComponent } from 'react';
import { EventEmitter } from 'events';

//事件总线 event bus
const eventsBus = new EventEmitter();

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      say: '',
    };
  }
  render() {
    return (
      <div>
        <h2>home</h2>
        {this.state.say}
      </div>
    );
  }

  componentDidMount() {
    //事件监听
    eventsBus.addListener('sayHello', this.handleSayHelloListener);
  }

  componentWillUnmount() {
    //取消事件监听
    eventsBus.removeListener('sayHello', this.handleSayHelloListener);
  }

  //处理总线上发过来的数据
  handleSayHelloListener(args) {
    console.log(args);

    // this.setState({
    //   say: args,
    // });
  }
}

class Profile extends PureComponent {
  render() {
    return (
      <div>
        Profile
        <button onClick={(e) => this.sendInfo()}>传递事件到Home</button>
      </div>
    );
  }

  sendInfo() {
    eventsBus.emit('sayHello', '你好啊');
  }
}
class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <Profile />
      </div>
    );
  }
}



export default App;
