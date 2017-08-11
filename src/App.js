import React, { Component } from 'react';
import UsernameTexbox from './controls/usernameTextbox.js';
import colors from './libs/colors.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React Controls</h2>
        </div>
        <div style={{width: '100%', height: '50px', backgroundColor: colors.blackbrown}}>
          <UsernameTexbox />
        </div>
      </div>
    );
  }
}

export default App;
