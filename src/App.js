import React, { Component } from 'react';
import UsernameTexbox from './controls/usernameTextbox.js';
import PasswordTextbox from './controls/passwordTextbox.js';
import Button from './controls/button.jsx';
import RadioGroup from './controls/radioGroup.jsx';
import colors from './libs/colors.js';
import styled from 'styled-components';

const ControlContainer = styled.div`
  width: 95%;
  min-width: 400px;
  height: 40%;
  padding: 10px;
  margin: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
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

let themes = [{themeName:'Default', id: 'default' },
{themeName:'Primary', id: 'primary' },
{themeName:'Green', id: 'green' },
{themeName:'Savor', id: 'savor'}];

class App extends Component {
  constructor(props){
    super(props);
    this._onRadioGroupClick = this._onRadioGroupClick.bind(this);
    themes.forEach((item) => {
      if (item.themeName === 'Default')
        this.state = {selectedTheme : item };
    });
  }

  _onButtonClick = (event, buttonName) => {
    document.getElementById('buttonResponse').innerText = buttonName + ' clicked';
  }

  _onRadioGroupClick = (event, index, selectedItem) =>{

    this.setState(state => (
      {selectedTheme : selectedItem})
      );
  }

  render() {
    let selectedThemeName = this.state.selectedTheme.id;

    return (
      <div>
        <AppHeader>
          <h2>Welcome to React Controls</h2>
          <div>implemented with Styled-Components</div>
        </AppHeader>
        <div style={{ margin: '10px', width: '100%' }}>
          <ControlContainer>
            <div style={{display: 'inline-block', margin: '0px 10px 0px 0px'}}>
              <div style={{margin: '0px 0px 12px 0px'}}>
                <UsernameTexbox id='username' placeholder='Username' theme={selectedThemeName} />
              </div>
              <div style={{margin: '0px 0px 12px 0px'}}>
              <PasswordTextbox id='passwordBox' placeholder='Enter password' theme={selectedThemeName} />
              </div>
              <div>
                <span style={{display: 'inline-block', margin: '0px 10px 0px 0px'}}>Theme:</span>
                <RadioGroup items={themes}
                            getLabelContentFunc={(item) => item.themeName}
                            getIdFunc={(item) => item.id}
                            selectedItem={this.state.selectedTheme}
                            onClick={(event, index, selectedItem) => this._onRadioGroupClick(event, index, selectedItem)}
                            theme={selectedThemeName}
                            />
              </div>
            </div>
            <div style={{display: 'inline-block', margin: '0px', verticalAlign: 'top'}}>
              <div style={{margin: '0px 0px 10px 0px'}} >Usage:</div>
              <pre style={{whiteSpace: 'pre-wrap', margin: '0px 10px 0px 0px',fontSize:'10pt', fontFamily: 'Courier New'}}>
                <Code style={{fontSize:'10pt', fontFamily: 'Courier New', whiteSpace: 'pre-wrap'}}>
                  &lt;UserNameTextbox 
                      id='username'
                      placeholder='Username'
                      theme={selectedThemeName} /&gt; <br/>
                  &lt;PasswordTextbox id='passwordBox' placeholder='Enter password' theme={selectedThemeName}
                  /&gt;
                </Code>
              </pre>
            </div>
          </ControlContainer>
          <ControlContainer>
          <div style={{display: 'inline-block', margin: '0px 100px 0px 0px'}}>
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
            </div>
            <div style={{display: 'inline-block', margin: '0px', verticalAlign: 'top'}}>
              <div style={{margin: '0px 0px 10px 0px'}} >Usage:</div>
              <pre style={{whiteSpace: 'pre-wrap', margin: '0px 10px 0px 0px',fontSize:'10pt', fontFamily: 'Courier New'}}>
                <Code style={{fontSize:'10pt', fontFamily: 'Courier New', whiteSpace: 'pre-wrap'}}>
                  &lt;Button buttonLabel='Savor'
                    theme='savor' <br />
                    style=&#123;&#123; marginLeft: '5px' &#125;&#125; // this is optional <br /> 
                    onClick=&#123;(e) => this._onButtonClick(e, 'savor') &#125;<br />
                    tabIndex='4' /&gt;
                </Code>
              </pre>

            </div>
          </ControlContainer>
        </div>
      </div>
    );
  }
}

export default App;
