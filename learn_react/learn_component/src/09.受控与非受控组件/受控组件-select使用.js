import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      selectedFruits: '香蕉'
    }
  }
  render() {
    return (
      <div>
        <form action="" onSubmit={ e => this.handleSubmit(e)}>
        <select name="fruits" 
                onChange={ e => this.handleChange(e)}
                value={ this.state.selectedFruits}>
          <option value="苹果">苹果</option>
          <option value="香蕉">香蕉</option>
          <option value="梨子">梨子</option>
        </select>
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
      selectedFruits: e.target.value
    })
  }
}

App.propTypes = {

};

export default App;