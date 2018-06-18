import React, { Component } from 'react';
import UsernameTexbox from './controls/usernameTextbox.js';
import PasswordTextbox from './controls/passwordTextbox.js';
import Button from './controls/button.jsx';
import RadioButton from './controls/radioButton.jsx';
import colors from './libs/colors.js';
import styled from 'styled-components';

const ControlContainer = styled.div`
  width: 90%;
  min-width: 400px;
  height: 40%;
  padding: 10px;
  margin: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  `;

const CodeContainer = styled.div`
  position: fixed;
  display: inline-block;
  margin-left: 20px;
  `;

const Code = styled.code`
  background-color: ${colors.lightgray};
  border: 1px solid #999;
  display: inline-block;
  padding: 5px;
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

  _onButtonClick = (event, buttonName) => {
    document.getElementById('buttonResponse').innerText = buttonName + ' clicked';
  }
  render() {
    return (
      <div>
        <AppHeader>
          <h2>Welcome to React Controls</h2>
          <div>implemented with Styled-Components</div>
        </AppHeader>
        <div style={{ margin: '10px', width: '100%' }}>
          <ControlContainer>
            <UsernameTexbox id='username' />
            <div>
              <RadioButton />
            </div>
 {/*            <CodeContainer>
              <pre>
                <Code>
                  &lt;UserNameTextbox id='username' placeholder='Username' theme='default' /&gt;
</Code>
              </pre>
            </CodeContainer> */}
          </ControlContainer>
          <ControlContainer>
            <UsernameTexbox id='primaryUsrNm' placeholder='Username' theme='primary' />
          </ControlContainer>
          <ControlContainer>
            <UsernameTexbox id='greenUsrNm' placeholder='Username' theme='green' />
          </ControlContainer>
          <ControlContainer>
            <PasswordTextbox id='passwordBox' placeholder='Enter password' />
          </ControlContainer>
          <ControlContainer>
            <PasswordTextbox id='pwdBox' theme='primary' />
          </ControlContainer>
          <ControlContainer>
            <PasswordTextbox id='greenPwdBox' placeholder='Password' theme='green' />
          </ControlContainer>
          <ControlContainer>
            <Button buttonLabel='Click Me'
              onClick={(e) => this._onButtonClick(e, 'default')}
              tabIndex='1'
            />
            <Button buttonLabel='Primary'
              theme='primary'
              style={{ marginLeft: '5px' }}
              onClick={(e) => this._onButtonClick(e, 'primary')}
              tabIndex='2'
            />
            <Button buttonLabel='Green'
              theme='green'
              style={{ marginLeft: '5px' }}
              onClick={(e) => this._onButtonClick(e, 'Green')}
              tabIndex='3'
            />
            <Button buttonLabel='Savor'
              theme='savor'
              style={{ marginLeft: '5px' }}
              onClick={(e) => this._onButtonClick(e, 'savor')}
              tabIndex='4'
            />
            <div id='buttonResponse' style={{ display: 'block', width: '100%', horizontalAlignment: 'center', marginTop: '5px', fontSize: '10px' }}>&nbsp;</div>
          </ControlContainer>
        </div>
      </div>
    );
  }
}

export default App;
