import React, { PureComponent, createContext } from 'react';

//定义一个高阶组件
function withAuth(WrapperCpn) {
  return (props) => {
    return (
      <UserContext.Consumer>
        {(value) => {
          // console.log(props);
          if(value.isLogin) {
            return <h2>请先登录</h2>
          }else{
            <WrapperCpn {...props}></WrapperCpn>
          }
        }}
      </UserContext.Consumer>
    );
  };
}
//创建Context
const UserContext = createContext();

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
const UserHome = withAuth(Home)
const UserAbout = withAuth(About)

class App extends PureComponent {
  render() {
    return (
      <div>
        <UserContext.Provider value={{isLogin: true}}>
          <UserHome nickname="z"/>
          <UserAbout />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
