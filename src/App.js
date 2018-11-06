import { slide as Menu } from 'react-burger-menu'
import React, { Component } from 'react';
import './App.css';
import './Menu.css';

class App extends Component {
  render() {
    return (
      <div id="outer-container">
        <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/">About</a>
          <a id="contact" className="menu-item" href="/">Contact</a>
          <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
        </Menu>
        <main id="page-wrap">

        </main>
      </div>
    );
  }
}

export default App;
