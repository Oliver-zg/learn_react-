import React, { PureComponent } from 'react';
import './style.css'
import classNames from 'classnames'
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }
  render() {
    const { isActive } = this.state;
    return (
      <div>
        {/* 原始 */}
        <h2 className={'title ' + (isActive ? 'active' : '')}>我是标题1</h2>
        {/* classnames库添加class */}
        <h2 className={classNames({"active":isActive})}>我是标题2</h2>
        
      </div>
    );
  }
}

export default App;
