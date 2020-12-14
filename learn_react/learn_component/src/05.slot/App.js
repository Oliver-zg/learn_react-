import React, { Component } from 'react';
import NavBar from './NavBar'
class App extends Component {
  render() {
    return (
      <div>
        <NavBar leftSlot={<h1>11</h1>}
                centerSlot={<h1>12</h1>}
                rightSlot={<h1>13</h1>}>
          
        </NavBar>
      </div>
    );
  }
}

export default App;