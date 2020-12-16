import React, { PureComponent } from 'react';

import appStyle from './style.module.css'

class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <h2 className={appStyle.title}>App的Title</h2>
      </div>
    );
  }
}


export default App;