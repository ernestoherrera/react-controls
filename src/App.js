import React, { Component } from 'react';
import UsernameTexbox from './controls/usernameTextbox.js';
import colors from './libs/colors.js';
import styled from 'styled-components';

const ControlContainer = styled.div`
  width: 33%;
  min-width: 300px;
  height: 20%;
  padding: 10px;
  
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  `;

const AppHeader = styled.div`
  padding: 10px;
  text-align: center;
  background-color: #222;
  height: 80px;
  margin: 0px 0px 10px 0px; 
  color: ${colors.blanchedalmond};
`;

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader>
          <h2>Welcome to React Controls</h2>
          <div>implemented with Styled-Components</div>
        </AppHeader>
        <div style={{margin:'10px'}}>
          <ControlContainer>
            <UsernameTexbox />
          </ControlContainer>
        </div>
      </div>
    );
  }
}

export default App;
