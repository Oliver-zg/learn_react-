import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class App extends PureComponent {
  render() {
    return (
      <div>
        <form action="" onSubmit={ e => this.handleSubmit(e)}>
          <label htmlFor="username">
          用户：<input type="text" id="username" onChange={e => this.handleChange(e)}/>
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
    console.log(e.target.value)
    this.setState({
      state: e.target.value
    })
  }
}

App.propTypes = {

};

export default App;