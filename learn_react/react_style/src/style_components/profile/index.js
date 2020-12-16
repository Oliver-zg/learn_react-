import React, { PureComponent } from 'react';
import styled from 'styled-components'

// import {
//   HomeStyle
// } from './style.js'

/**
 * 特点
 * 1. props穿透 动态的设置css样式
 */
const Hinput = styled.input.attrs({
  placeholder: 'zg',
  bColor: 'red'
})`
background-color: ${props => props.bColor};
color: ${props => props.color}
`

const Button = styled.button`

`
class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      color: 'purple'
    }
  }
  
  render() {
    return (
      <div>
        <Hinput type="text" color={this.state.color}/>
      </div>

        

    );
  }
}


export default App;