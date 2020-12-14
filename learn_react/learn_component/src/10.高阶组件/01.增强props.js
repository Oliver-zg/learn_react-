import React, { PureComponent } from 'react';

//定义一个高阶组件
function enhanceProps(WrappedComponent) {
  return props => {
    return <WrappedComponent {...props} region="中国"></WrappedComponent>
  }
}
class Home extends PureComponent {
  render() {
  return <h2>Home:{this.props.nickname}+{this.props.level}+{this.props.region}</h2>;
  }
}
class About extends PureComponent {
  render() {
  return <h2>About:{this.props.nickname}+{this.props.level}+{this.props.region}</h2>;
  }
}
const EnHome =  enhanceProps(Home)

class App extends PureComponent {
  render() {
    return (
      <div>
        <EnHome nickname="oliver" level={90} />
        <About nickname="oliverrr" level={80} />
      </div>
    );
  }
}

function enhanceComponent(WrapperComponent) {
  /* NewComponent可以省略 在插件中会显示父组件的名称*/
  // return class NewCompent extends PureComponent {
  //   render() {
  //     return (
  //       <WrapperComponent />
  //     )
  //   }
  //
  class NewComponent extends PureComponent {
    render() {
      return <WrapperComponent />;
    }
  }
  //可以自定义函数的名称
  NewComponent.displayName = 'zg';
  return NewComponent;
}

export default enhanceComponent(App);
