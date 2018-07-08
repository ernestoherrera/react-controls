import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const colors = {
  lightgray: '#d3d3d3',
  darkgray: '#777',
  black: '#000',
  white: '#fff',
  darkblue: '#00008b',
  primaryblue: '#008cba',
  green: '#21ce99',
  doradoyellow: '#ffd700'
};

const Themes = {
  default: {color: colors.black , borderColor: colors.black, backgroundColor: 'transparent', svgColor: '000000'},
  primary: {color: colors.primaryblue, borderColor: colors.primaryblue, backgroundColor: 'transparent', svgColor: '008cba'},
  green: {color: colors.green, borderColor: colors.green, backgroundColor: 'transparent', svgColor: '21ce99'},
  savor: {color: colors.black, borderColor: colors.doradoyellow, backgroundColor: 'transparent', svgColor: 'ffd700'}
}

const PasswordLabel =  styled.label`${({size, theme}) => {
    let picSize = (size !== undefined) ? size : 24;
    theme = !theme ? 'default' : theme;

    let svgColor = Themes[theme].svgColor;
    let borderColor = Themes[theme].borderColor;

    return `
    width: ${picSize}px;
    margin-right: 0px;
    background-color: transparent;
    background-image: url(data:image/svg+xml,%3Csvg%20fill%3D%22%23${svgColor}%22%20height%3D%22${picSize}%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%22${picSize}%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M18%208h-1V6c0-2.76-2.24-5-5-5S7%203.24%207%206v2H6c-1.1%200-2%20.9-2%202v10c0%201.1.9%202%202%202h12c1.1%200%202-.9%202-2V10c0-1.1-.9-2-2-2zm-6%209c-1.1%200-2-.9-2-2s.9-2%202-2%202%20.9%202%202-.9%202-2%202zm3.1-9H8.9V6c0-1.71%201.39-3.1%203.1-3.1%201.71%200%203.1%201.39%203.1%203.1v2z%22/%3E%0A%3C/svg%3E);
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 5px 0px 0px 5px;
    border-top: 1px;
    border-left: 1px;
    border-bottom: 1px;
    border-style: solid;
    border-color: ${borderColor}`}
  }`;

  const InputPassword = styled.input`
    font-size: 0.9em;
    display: block;
    background-color: transparent;
    margin: 0;
    padding-left: 4px;
    border-radius: 0px 5px 5px 0px; 
    border: 1px;
    border-style: solid;
    border-color: ${props => props.borderColor};
`;
  const PasswordContainer = styled.div`
    display: flex;
    display-direction: row;
  `;

  const ValidationContainer = styled.div`${({hide}) => {
    return hide ? `
      display: none;
      ` : `
      margin-top: 3px;
      display: block;
      color:${colors.darkred};
      `;
    }
  }`;

export default class PasswordTextbox extends React.Component{
  constructor(props){
    super(props);
    this.state = {capsLockOn: false};
  }

  willComponentMount = () => {
    this.setState({capsLockOn: false});
  }

  render = () => {

    let {inputWidth , inputHeight, iconSize, labelHeight, labelWidth, id, theme, ...otherProps} = this.props;
    let overallHeight = '32px';
    let showValidator = this.state !== null ? this.state.capsLockOn : false;
    theme = !theme ? 'default' : theme;

    if (!Themes[theme]) theme = 'default';

    if(inputWidth === null || inputWidth === undefined) inputWidth = '275px';
    if(inputHeight === null || inputHeight === undefined) inputHeight = overallHeight;
    if(iconSize === null || iconSize === undefined) iconSize = '22';
    if(labelHeight == null || labelHeight === undefined) labelHeight = overallHeight;
    if(labelWidth == null || labelWidth === undefined) labelWidth = '32px';

    return(
      <div>
      <PasswordContainer>
        <PasswordLabel size={iconSize} style={{width: labelWidth, height: labelHeight}} theme={theme}/>
        <InputPassword 
            style={{width: inputWidth, height: inputHeight}}
            type='password' 
            name='password' 
            id={id}
            borderColor={Themes[theme].borderColor}
            onChange={this._change}
            onKeyDown={this._keyDown}
            onKeyPress={this._keyPress}
            {...otherProps}
            />
      </PasswordContainer>
      <ValidationContainer hide={!showValidator}>
          CAPS LOCK IS ON
      </ValidationContainer>
      </div>
    );
  };

  _change = (inputBox) => {
    this.setState({ value: inputBox.target.value});
    this.onInputPasswordChange(inputBox.target.value);
  };

  onInputPasswordChange = (value) => {
    if (this.props.onChange) this.props.onChange(value);
  }

  _keyDown = (key) => {
    if(key.keyCode === 20) this.setState({capsLockOn: true});
  };

  _keyPress = (key) => {
    this.setState({capsLockOn: this._isCapsLockOn(key)});
  };

  _isCapsLockOn = (e) => {
    e = (e) ? e : window.event;

    let charCode = false;

    charCode = e.which ? e.which : 
                e.keyCode ? e.keyCode : 
                false;

    let shifton = false;
    if (e.shiftKey) {
        shifton = e.shiftKey;
    } else if (e.modifiers) {
        shifton = !!(e.modifiers & 4);
    }

    if (charCode >= 97 && charCode <= 122 && shifton)  return true;

    if (charCode >= 65 && charCode <= 90 && !shifton) return true;

    return false;
  };
}

PasswordTextbox.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func
};