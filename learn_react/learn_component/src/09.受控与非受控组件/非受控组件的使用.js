import React, { PureComponent,createRef } from 'react';

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.nameRef = createRef()
  }
  render() {
    return (
      <div>
        <form action="" onSubmit={ e => this.handleSubmit(e)}>
          <label htmlFor="username">
          用户：<input type="text" id="username" ref={ this.nameRef } onChange={e => this.handleChange(e)}/>
          </label>
        <input type="submit" value="提交"/>
        </form>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
  }
  handleChange(e) {
    console.log(this.nameRef.current.value)
    // this.setState({
    //   state: e.target.value
    // })
  }
}


export default App;