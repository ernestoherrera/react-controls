import React from 'react';
import styled from 'styled-components';

const colors = {
  "whitesmoke": "#f5f5f5",
  "black": "#000000",
}

const UserNameLabel =  

  styled.label`${({size}) => {
    let picSize = 24;
    if(size !== undefined ) picSize = size;

    return `   
    width: ${size}px;
    margin-right: 3px;
    background-color: ${colors.whitesmoke};
    background-image: url(data:image/svg+xml,%3Csvg%20fill%3D%22%23000000%22%20height%3D%22${picSize}%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%22${picSize}%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M12%2012c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm0%202c-2.67%200-8%201.34-8%204v2h16v-2c0-2.66-5.33-4-8-4z%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22/%3E%0A%3C/svg%3E);
    background-repeat: no-repeat;
    background-position: left;
    border-radius: 5px 0px 0px 5px;`}
  }`;

  const UsernameInput = styled.input`
    font-size: 1.2em;
    display: block;
    background-color: ${colors.whitesmoke};    
    margin: 0;
    padding-left: 4px;
    border: 0;
    border-radius: 0px 5px 5px 0px;
  `;

  const UsernameContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 25px;
  `;

  export default class UsernameTextbox extends React.Component{
    constructor(props){
      super(props)
    }

    
  componentWillMount = () => {
		this.setState({ value: this.props.defaultValue });
	};    
    render = () => {
      let {inputWidth , inputHeight, iconSize, labelHeight, otherProps} = this.props;
      
      if(inputWidth === null || inputWidth === undefined) inputWidth = '350px';
      if(inputHeight === null || inputHeight === undefined) inputHeight = '38px';
      if(iconSize === null || iconSize === undefined) iconSize = '30';
      if(labelHeight == null || labelHeight === undefined) labelHeight = '40px';


      return (
        <UsernameContainer>
          <UserNameLabel size={iconSize} style={{height: labelHeight}} for='username' />
          <UsernameInput autoFocus={true} 
              style={{width: inputWidth, height: inputHeight}} 
              type='text' 
              name='username' 
              id='username' 
              autoCapitalize='none' 
              onChange={this._usernameUpdated}>
          </UsernameInput>
        </UsernameContainer>
      );
    }

    _usernameUpdated = (txtBox) => {
      this.setState({username: txtBox.target.value});
    }
  }