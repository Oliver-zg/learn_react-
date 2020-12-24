import React, { PureComponent } from 'react';


class App extends PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    console.log();
    return (
      <div>
        <h2>我是详情页:{this.props.match.params.id}</h2>
      </div>
    );
  }
}


export default App;