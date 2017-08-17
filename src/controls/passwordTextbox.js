import React from 'react';
import styled from 'styled-components';

const colors = {
  "whitesmoke": "#f5f5f5",
  "black": "#000000",
}

const PasswordLabel =  styled.label`${({size}) => {
    let picSize = (size !== undefined) ? size : 24;

    return `
    width: ${picSize}px;
    margin-right: 0px;
    background-color: ${colors.whitesmoke};
    background-image: url(data:image/svg+xml,%3Csvg%20fill%3D%22%23000000%22%20height%3D%22${picSize}%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%22${picSize}%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M18%208h-1V6c0-2.76-2.24-5-5-5S7%203.24%207%206v2H6c-1.1%200-2%20.9-2%202v10c0%201.1.9%202%202%202h12c1.1%200%202-.9%202-2V10c0-1.1-.9-2-2-2zm-6%209c-1.1%200-2-.9-2-2s.9-2%202-2%202%20.9%202%202-.9%202-2%202zm3.1-9H8.9V6c0-1.71%201.39-3.1%203.1-3.1%201.71%200%203.1%201.39%203.1%203.1v2z%22/%3E%0A%3C/svg%3E);
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 5px 0px 0px 5px;
    border-top: 2px;
    border-left: 2px;
    border-bottom: 2px;
    border-style: solid;
    border-color: ${colors.black}`}
  }`;

  const InputPassword = styled.input`
    font-size: 1.0em;
    display: block;
    background-color: ${colors.whitesmoke};
    margin: 0;
    padding-left: 4px;
    border-radius: 0px 5px 5px 0px;
    border: 2px;
    border-style: solid;
    border-color: ${colors.black};
`;
  const PasswordContainer = styled.div`
    display: flex;
    display-direction: row;    
  `;

export default class PasswordTextbox extends React.Component{
  constructor(props){
    super(props)
  }

  render = () => {

    let {inputWidth , inputHeight, iconSize, labelHeight, labelWidth, otherProps} = this.props;
    let overallHeight = '32px';

    if(inputWidth === null || inputWidth === undefined) inputWidth = '275px';
    if(inputHeight === null || inputHeight === undefined) inputHeight = overallHeight;
    if(iconSize === null || iconSize === undefined) iconSize = '22';
    if(labelHeight == null || labelHeight === undefined) labelHeight = overallHeight;
    if(labelWidth == null || labelWidth === undefined) labelWidth = '32px';

    return(
      <PasswordContainer>
        <PasswordLabel size={iconSize} style={{width: labelWidth, height: labelHeight}}/>
        <InputPassword 
            style={{width: inputWidth, height: inputHeight}}
            type='password' 
            name='password' 
            id='password' 
            onChange={this._passwordUpdated}  
            onKeyDown={this._handleKeyDown} 
            onKeyPress={this._handleKeyPress} />
      </PasswordContainer>
    );
  }
}