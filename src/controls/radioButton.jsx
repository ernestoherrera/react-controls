import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  background-image: ${
    props => props.selected ? 
      `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='30px' height='30px' viewbox='0 0 20 20'%3E%3Ccircle cx='15' cy='15' r='${props.radius}' stroke-width='.8' stroke='${props.borderColor}' fill='${props.radioButtonOnBackgroundColor}' class='shape' /%3E%3Ccircle cx='15' cy='15' r='6' stroke-width='.5' stroke='${props.borderColor}' fill='${props.radioButtonOnBackgroundColor2}' /%3E%3C/svg%3E");` 
  : 
      `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='30px' height='30px' viewbox='0 0 20 20'%3e%3ccircle cx='15' cy='15' r='${props.radius}' stroke-width='.8' fill='${props.backgroundColor}' stroke='${props.borderColor}' class='shape' /%3e%3c/svg%3e");`
    }
    transition: background-image 0.5s ease-in-out;
`;

const RadioLabel = styled.span`
  color: ${props => props.color};
  margin: 0px 10px 0px 0px;
  padding: 0px 0px 0px 3px;
  cursor: pointer;
`

export default class RadioButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {selected : !!props.isSelected};
    this._onClick = this._onClick.bind(this);
  }

  _onClick = (event) => {

    if (this.props.onClick)
      this.props.onClick(event);

    this.setState({selected: !this.state.selected});
  }

  componentDidMount = () => {

	};

  render =() =>{

    let { labelContent, theme, ...otherProps} = this.props;
    let selected = this.state.selected;
    
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
              onClick={(event) => this._onClick(event)}
              selected={selected} 
              radius='11'
              radioButtonOnBackgroundColor={radioButtonOnBackgroundColor}
              radioButtonOnBackgroundColor2={radioButtonOnBackgroundColor2}
              backgroundColor={backgroundColor}
              borderColor={borderColor}
              {...otherProps}/><RadioLabel color={color} onClick={(event) => this._onClick(event)}>{labelContent}</RadioLabel>
      </div>
    );
  }

}

RadioButton.propTypes = {
  labelContent : PropTypes.string.isRequired,
  id : PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func
}