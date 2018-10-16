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
          Configure the board and observe how it evolves! 
        </p>
        <Life />

        <h2 className="App-title">Rules</h2>
        <p>1. Living cell with less than 2 live neighbors dies, as if by underpopulation.</p>
        <p>2. Living cell with 2 or 3 live neighbors lives on to the next generation.</p>
        <p>3. Living cell with more than 3 live neighbors dies, as if by overpopulation.</p>
        <p>4. Dead cell with exactly 3 live neighbors becomes a live cell, as if by reproduction.</p>
      </div>
    );
  }
}

export default App;
