import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const KeyCode = {
	ENTER: 13,
	SPACE: 32,
};

const colors = {
    lightgray: '#d3d3d3',
    darkgray: '#777',
    black: '#000',
    white: '#fff',
    darkblue: '#00008b',
    primaryblue: '#008cba',
    yaleblue: '#0e4d92',
    green: '#21ce99',
    doradoyellow: '#ffd700'
}

const Themes = {
  default: {
    color : colors.black,
    borderColor: colors.black,
    backgroundColor : colors.white,
    hoverColor : colors.black,
    hoverBackgroundColor : colors.lightgray,
    hoverBorderColors: colors.black
  },
  primary: {
    color : colors.primaryblue ,
    borderColor: colors.primaryblue,
    backgroundColor : colors.white,
    hoverColor : colors.white,
    hoverBackgroundColor : colors.primaryblue,
    hoverBorderColor: colors.primaryblue 
  },
  green: {
    color : colors.green,
    borderColor: colors.green,
    backgroundColor : colors.white,
    hoverColor : colors.white,
    hoverBackgroundColor : colors.green,
    hoverBorderColor: colors.white
  },
  savor: {
    color: colors.black,
    borderColor: colors.black,
    backgroundColor: colors.doradoyellow,
    hoverColor: colors.doradoyellow,
    hoverBackgroundColor: colors.black,
    hoverBorderColor: colors.doradoyellow
  }
}

const ButtonContainer = styled.div`
  display: inline-block;
  flex-wrap: nowrap;
  cursor: pointer;
  margin-left: 0px;
  padding: 0 15px;
  min-width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 5px;
  border: 1px;
  border-style: solid;
  border-color: ${props => props.disabled ? 'rgba(0,0,0,0.34)' : props.borderColor };
  pointer-events: ${props => props.disabled ? 'none': 'auto'};
  background-color: ${props => props.disabled ? colors.lightgray : props.backgroundColor};
  color: ${props => props.color};
  &:hover {
    color: ${props => props.hoverColor};
    background-color: ${props => props.hoverBackgroundColor};
    border-color: ${props => props.hoverBorderColor}
  };
  &:active {
    border-width: 2px;
  };
  &:focus {
    box-shadow: 0 0 0 2px rgba(0,0,0,0.14) }
  `;

  const ButtonLabel = styled.div`
  font-size: 11px;
  text-transform: uppercase;
  display: inline-block;
  line-height: 40px;
  width:100%;
  color:${props => props.disabled ? colors.darkgray : 'inherit'};
  `;

export default class Button extends React.Component{
  constructor(props){
  super(props);
  this.state = { disabled: false };
  this._onClick = this._onClick.bind(this);
  this._onKeyUp = this._onKeyUp.bind(this);
}

_onClick = (event) => {

  if (this.props.disabled) return;
  return this.props.onClick && this.props.onClick(event);
}

_onKeyUp = (event) => {
  if ((event.keyCode === KeyCode.SPACE || event.keyCode === KeyCode.ENTER) && !!this.props.onClick && !this.props.disabled) {
    this.props.onClick();
    event.stopPropagation();
    event.preventDefault();
  }
}

render(){
    let {buttonStyle, labelStyle, buttonLabel, disabled,
          iconName, onKeyUp, onClick, theme, ...others} = this.props;
    let color = colors.black;
    let borderColor = colors.black;
    let hoverColor = colors.black;
    let hoverBackgroundColor = colors.lightgray;
    let hoverBorderColor = colors.black;
    let backgroundColor = colors.white;

    disabled = !disabled ? false : true;
    theme = !theme ? 'default' : theme;

    color = Themes[theme].color;
    borderColor = Themes[theme].borderColor;
    backgroundColor = Themes[theme].backgroundColor;
    hoverColor = Themes[theme].hoverColor;
    hoverBackgroundColor = Themes[theme].hoverBackgroundColor;
    hoverBorderColor = Themes[theme].hoverBorderColor;

  return (
      <ButtonContainer
          style={buttonStyle}
          onClick={this._onClick}
          onKeyUp={this._onKeyUp}
          tabIndex='0'
          disabled={disabled}
          color = {color}
          borderColor = {borderColor}
          backgroundColor = {backgroundColor}
          hoverColor = {hoverColor}
          hoverBackgroundColor = {hoverBackgroundColor}
          hoverBorderColor = {hoverBorderColor}
          {...others}>
          {iconName}
        <ButtonLabel style={labelStyle} disabled={disabled} 
          color={color}
          hoverColor={hoverColor}
          >
          {buttonLabel}
        </ButtonLabel>
      </ButtonContainer>
      );
    }
}

Button.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  theme: PropTypes.string,
  onClick: PropTypes.func,
  onKeyUp: PropTypes.func,
  buttonStyle: PropTypes.instanceOf(Object),
  labelStyle: PropTypes.instanceOf(Object),
  iconName: PropTypes.string,
  disabled: PropTypes.bool
}