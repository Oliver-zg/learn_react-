import React, { Component } from 'react';
import PropTypes from 'prop-types';
//属性验证
function Child(props) {
  const { names } = props;
  return (
    <ul>
      {
        names.map((item, index) => {
          return <li>{item}</li>;
        })
      }
    </ul>
  );
}
Child.propTypes = {
  names: PropTypes.array,
};
class App extends Component {
  render() {
    return (
      <div>
        <Child names={111} />
      </div>
    );
  }
}

export default App;
