import React, { PureComponent, createContext } from 'react';

//定义一个高阶组件
function withUser(WrapperCpn) {
  return (props) => {
    return (
      <UserContext.Consumer>
        {(value) => (
          <h2>
            <WrapperCpn {...props} {...value}></WrapperCpn>
          </h2>
        )}
      </UserContext.Consumer>
    );
  };
}
//创建Context
const UserContext = createContext({
  nickname: 'zz',
  level: -1,
  region: '北京',
});

class Home extends PureComponent {
  render() {
  return <h2>Home:{this.props.nickname}+{this.props.level}+{this.props.region}</h2>
  }
}

class About extends PureComponent {
  render() {
    return (
      <h2>
        Home:{this.props.nickname}+{this.props.level}+{this.props.region}
      </h2>
    );
  }
}
const UserHome = withUser(Home)
const UserAbout = withUser(About)
class App extends PureComponent {
  render() {
    return (
      <div>
        <UserContext.Provider value={{ nickname: 'why', level: 90, region: '长沙' }}>
          <UserHome />
          <UserAbout />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
