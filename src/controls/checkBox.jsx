import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//TODO: implement the themes
//TODO: implement the 'enabled' property
//may need to come up with disabled css styles
//TODO: write up readme.md

const colors = {
  lightgray: '#d3d3d3',
  darkgray: '#777',
  black: '#000',
  white: '#fff',
  darkblue: '#00008b',
  primaryblue: '#008cba',
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
    hoverBorderColors: colors.black,
    radioButtonOnBackgroundColor: colors.darkgray,
    radioButtonOnBackgroundColor2: colors.white
  },
  primary: {
    color : colors.primaryblue ,
    borderColor: colors.primaryblue,
    backgroundColor : colors.white,
    hoverColor : colors.white,
    hoverBackgroundColor : colors.primaryblue,
    hoverBorderColor: colors.primaryblue,
    radioButtonOnBackgroundColor: colors.primaryblue,
    radioButtonOnBackgroundColor2: colors.white,
  },
  green: {
    color : colors.green,
    borderColor: colors.green,
    backgroundColor : colors.white,
    hoverColor : colors.white,
    hoverBackgroundColor : colors.green,
    hoverBorderColor: colors.white,
    radioButtonOnBackgroundColor: colors.green,
    radioButtonOnBackgroundColor2: colors.white,
  },
  savor: {
    color: colors.black,
    borderColor: colors.black,
    backgroundColor: colors.doradoyellow,
    hoverColor: colors.doradoyellow,
    hoverBackgroundColor: colors.black,
    hoverBorderColor: colors.doradoyellow,
    radioButtonOnBackgroundColor: colors.black,
    radioButtonOnBackgroundColor2: colors.doradoyellow
  }
}

const CheckElement = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: 0px;
  outline: none;
  text-align: center;
  cursor: pointer;
  background-position: left center;
  background-repeat: no-repeat;
  vertical-align: middle;
  background-image: ${
  props => props.checked ? 
    `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' viewbox='0 0 30 30' %3e%3crect x='1.5' y='1.5' rx='5' ry='5' width='27' height='27' stroke='black' fill='transparent' stroke-width='1.5'/%3e%3cpath stroke-width='2.5' stroke='green' fill='none' d='M5 15 L12 22 Q15 10 ,27 5'/%3e%3c/svg%3e");` 
: 
    `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' viewbox='0 0 30 30' %3e%3crect x='1.5' y='1.5' rx='5' ry='5' width='27' height='27' stroke='black' fill='transparent' stroke-width='1.5'/%3e%3c/svg%3e");`
  }
  transition: background-image 0.5s ease-in-out;
  background-position: 50% 50%;
`;

const CheckboxLabel = styled.span`
  color: ${props => props.color};
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 5px;
  cursor: pointer;
`

export default class Checkbox extends React.Component {
  constructor(props){
    super(props);
    this.state = { checked: !!props.checked };
    this._onClick = this._onClick.bind(this);
  }
  componentDidMount = () => {

  }
  _onClick = (event) => { 

    if (this.props.enabled !== undefined && !this.props.enabled) return;
    if (this.props.onClick !== undefined) this.props.onClick(event, !this.state.checked, this.props.id);
    this.setState({checked: !this.state.checked});
  }
  render() {
    let { labelContent, theme, ...otherProps} = this.props;
    let checked = this.state.checked;

    if(this.props.theme === undefined) theme = 'default';

    let borderColor = Themes[theme].borderColor;
    let backgroundColor = Themes[theme].backgroundColor;
    let checkboxOnBackgroundColor = Themes[theme].radioButtonOnBackgroundColor;
    let checkboxOnBackgroundColor2 = Themes[theme].radioButtonOnBackgroundColor2;
    let color = Themes[theme].color;

    console.log(checked);
    return (
      <span>
      <CheckElement 
        checked= {checked}
        onClick={(event) => this._onClick(event)}
        checkboxOnBackgroundColor={checkboxOnBackgroundColor}
        checkboxOnBackgroundColor2={checkboxOnBackgroundColor2}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        {...otherProps}
      /><CheckboxLabel color={color} onClick={(event) => this._onClick(event)} >{labelContent}</CheckboxLabel>
    </span>
    );
  }
}

Checkbox.propTypes = {
  labelContent : PropTypes.string.isRequired,
  id : PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func
}