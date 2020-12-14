import React, { PureComponent } from 'react';

class App extends PureComponent {
  render() {
    return (
      <div>
        
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
      return (
        <WrapperComponent />
      )
    }
  }
  //可以自定义函数的名称
  NewComponent.displayName = "zg"
  return NewComponent
}


export default enhanceComponent(App);