import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

//TODO: implement the 'enabled' property
//may need to come up with disabled css styles
//TODO: write up readme.md

// These colors and Themes objects could be set in a separate file
// It is left here just for ease of reading the code.
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

const RadioElement = styled.span`
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
  background-repeat: no-repeat;
  background-position: center;
  transition: background-image 0.5s ease-in-out;
`;

const RadioLabel = styled.span`
  color: ${props => props.color};
  margin: 0px 10px 0px 0px;
  padding: 0px 0px 0px 3px;
  cursor: pointer;
`
function RadioButtonDisplay(props){
  if(!props || props.selected === undefined) return <span />;
  let borderColor = Themes['default'].borderColor;
  let backgroundColor = Themes['default'].radioButtonOnBackgroundColor;

  if(!props || props.theme !== undefined){
    borderColor = Themes[props.theme].borderColor;
    backgroundColor = Themes[props.theme].radioButtonOnBackgroundColor;
  }
  
  if(props.selected){
    return  <svg onClick={props.onClick} xmlns='http://www.w3.org/2000/svg' version='1.1' width='30px' height='30px' viewBox='0 0 20 20'>
              <circle cx='10' cy='10' r='8.5' strokeWidth='.5' stroke={borderColor} fill={backgroundColor} className='shape' />
              <circle cx='10' cy='10' r='5' strokeWidth='.5' stroke={borderColor} fill='#ffffff'  />
            </svg>
  } else {
    return  <svg onClick={props.onClick} xmlns='http://www.w3.org/2000/svg' version='1.1' width='30px' height='30px' viewBox='0 0 20 20'>
              <circle cx='10' cy='10' r='8.5' strokeWidth='.5' stroke={borderColor} fill='#ffffff' className='shape' /> 
            </svg>
  }

}

export default class RadioButton extends React.Component{
  constructor(props){
    super(props);
    
    this._onClick = this._onClick.bind(this);
  }

  _onClick = (event) => {

    if (this.props.onClick){
      this.props.onClick(event);
    }

  }

  componentDidMount = () => {

  };

  render =() =>{

    let { labelContent, theme, ...otherProps} = this.props;
    let selected = this.props.selected;

    if(theme === undefined) theme = 'default'

    let borderColor = Themes[theme].borderColor;
    let backgroundColor = Themes[theme].backgroundColor;
    let radioButtonOnBackgroundColor = Themes[theme].radioButtonOnBackgroundColor;
    let radioButtonOnBackgroundColor2 = Themes[theme].radioButtonOnBackgroundColor2;
    let color = Themes[theme].color;

    return(
      <div style={{display: 'inline-block'}} >

          <input type='radio' style={{display: 'none'}} />

            <RadioElement
              radioButtonOnBackgroundColor={radioButtonOnBackgroundColor}
              radioButtonOnBackgroundColor2={radioButtonOnBackgroundColor2}
              backgroundColor={backgroundColor}
              borderColor={borderColor}
              {...otherProps}>
                <RadioButtonDisplay onClick={this._onClick} selected={selected} theme={theme}/>
              </RadioElement>
              <RadioLabel color={color} onClick={(event) => this._onClick(event)}>{labelContent}</RadioLabel>
      </div>
    );
  }
}

RadioButton.propTypes = {
  labelContent : PropTypes.string.isRequired,
  id : PropTypes.string,
  selected: PropTypes.bool,
  selectedItem: PropTypes.object,
  onClick: PropTypes.func
}