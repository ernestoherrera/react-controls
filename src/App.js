import React, { Component } from 'react';
import UsernameTexbox from './controls/usernameTextbox.js';
import colors from './libs/colors.js';
import styled from 'styled-components';

const ControlContainer = styled.div`
  width: 33%;
  height: 20%;
  padding: 10px;
  
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 5px 4px 4px rgba(0,0,0,0.24);
  &:hover {
     background-color: ${colors.black};
  `;

const AppHeader = styled.div`
  padding: 10px;
  text-align: center;
  background-color: #222;
  height: 80px;
  margin: 0px 0px 10px 0px; 
  color: #ffffff;
`;

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader>
          <h2>Welcome to React Controls</h2>
          <div>implemented with Styled-Components</div>
        </AppHeader>
        <div>
          <ControlContainer >
            <UsernameTexbox labelHeight='38px'/>
          </ControlContainer>
        </div>
      </div>
    );
  }
}

export default App;
