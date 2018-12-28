import { scaleDown as Menu } from 'react-burger-menu'
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
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </main>
      </div>
    );
  }
}

export default App;
