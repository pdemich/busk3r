import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            You feel veeeery sleepy...
            And now you sleep!!!!
          </p>
		  <p>
            Eat your left arm. NOW!!!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lick my elbow
          </a>
        </header>
      </div>
    );
  }
}

export default App;
