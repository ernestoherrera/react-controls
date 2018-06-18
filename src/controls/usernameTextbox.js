import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const colors = {
  'black': '#000000',
}
const Themes = {
  default: {color: colors.black , borderColor: colors.black, svgColor: '000000'},
  primary: {color: '#008cba', borderColor: '#008cba', svgColor: '008cba'},
  green: {color: '#21ce99', borderColor: '#21ce99', svgColor: '21ce99'}
}

const UserNameLabel =  

  styled.label`${({size, theme}) => {
    let picSize = (size !== undefined ) ? size : 24;

    let color = Themes[theme].svgColor;
    let borderColor = Themes[theme].borderColor;

    return `
    width: 32px;
    display: inline-block;
    margin-right: 0px;
    background-color: transparent;
    background-image: url(data:image/svg+xml,%3Csvg%20fill%3D%22%23${color}%22%20height%3D%22${picSize}%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%22${picSize}%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M12%2012c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm0%202c-2.67%200-8%201.34-8%204v2h16v-2c0-2.66-5.33-4-8-4z%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22/%3E%0A%3C/svg%3E);
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 5px 0px 0px 5px;
    border-top: 1px;
    border-left: 1px;
    border-bottom: 1px;
    border-style: solid;
    border-color: ${borderColor};`}
  }`;

  const UsernameInput = styled.input`
    position: fixed;
    font-size: 0.9em;
    display: inline-block;
    background-color: transparent;
    margin: 0;
    padding-left: 4px;
    border-radius: 0px 5px 5px 0px;
    border: 1px;
    border-style: solid;
    border-color: ${props => props.borderColor};
  `;

  const UsernameContainer = styled.div`
    display: inline-block;
  `;

  export default class UsernameTextbox extends React.Component{
    constructor(props){
      super(props)
      this.state = {value: ''};
    }

    
  componentWillMount = () => {
    if(this.props.defaultValue)
		  this.setState({ value: this.props.defaultValue });
	};    
    render = () => {
      let {inputWidth , inputHeight, iconSize, labelHeight, labelWidth, theme, id, ...otherProps} = this.props;
      let overallHeight = '32px';
      let borderColor = colors.black;
      theme = !theme ? 'default' : theme;

      if(!id) id = 'username';
      if(inputWidth === null || inputWidth === undefined) inputWidth = 275;
      if(inputHeight === null || inputHeight === undefined) inputHeight = overallHeight;
      if(iconSize === null || iconSize === undefined) iconSize = '26';
      if(labelHeight == null || labelHeight === undefined) labelHeight = overallHeight;
      if(labelWidth == null || labelWidth === undefined) labelWidth = 32;

      borderColor = Themes[theme].borderColor;
      let containerWidth = inputWidth + labelWidth + 5;

      return (
        <UsernameContainer style={{width: containerWidth + 'px'}}>
          <UserNameLabel size={iconSize} 
              style={{height: labelHeight, width: labelWidth + 'px'}}
              borderColor={borderColor}
              theme={theme}
              for={id} />
          <UsernameInput autoFocus={true} 
              style={{width: inputWidth + 'px', height: inputHeight}}
              type='text'
              name='username'
              id={id}
              autoCapitalize='none'
              onChange={this._usernameUpdated}
              borderColor={borderColor}
              {...otherProps}
          >
          </UsernameInput>
        </UsernameContainer>
      );
    }

    _usernameUpdated = (txtBox) => {
      this.setState({username: txtBox.target.value});
      this.onUsernameInputChange(txtBox.target.value);
    }

    onUsernameInputChange = (value) => {
      if(this.props.onChange)
        this.props.onChange(value);
    }
  }

UsernameTextbox.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  inputWidth: PropTypes.string , //i,e '32px'
  inputHeight: PropTypes.string, 
  iconSize: PropTypes.number, 
  labelHeight: PropTypes.string, 
  labelWidth: PropTypes.string
}