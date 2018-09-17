import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Life from './Life';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Conway's Game of Life</h1>
        </header>
        <p className="App-intro">
          This is a simulation.
        </p>
        <Life />

      {/* <DropdownButton>
        <MenuItem eventKey="1">Action</MenuItem>
        <MenuItem eventKey="2">Another action</MenuItem>
        <MenuItem eventKey="3" active>
          Active Item
        </MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">Separated link</MenuItem>
      </DropdownButton> */}
      </div>
    );
  }
}

export default App;
