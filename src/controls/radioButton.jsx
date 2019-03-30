import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {svgEncodeHexColor} from '../libs/utils';

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
      props.selectedRadio
  : 
      `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='30px' height='30px' viewbox='0 0 20 20'%3e%3ccircle cx='15' cy='15' r='${props.radius}' stroke-width='.8' fill='${props.backgroundColor}' stroke='${props.borderColor}' class='shape' /%3e%3c/svg%3e");`
    }
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
    let radious = 11;
    
    let selectedRadio = `url(data:image/svg+xml,%20%20%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20width%3D%2230px%22%20height%3D%2230px%22%20viewbox%3D%220%200%2020%2020%22%3E%0A%20%20%20%20`;
    selectedRadio += `%3Ccircle%20cx%3D%2215%22%20cy%3D%2215%22%20r%3D%22${radious}%22%20stroke-width%3D%22.5%22%20stroke%3D%22${svgEncodeHexColor(borderColor)}%22%20fill%3D%22${svgEncodeHexColor(radioButtonOnBackgroundColor)}%22%20class%3D%22shape%22%20%2F%3E%0A%20%20%20%20%20%3Ccircle%20cx%3D%2215%22%20cy%3D%2215%22%20r%3D%225%22%20stroke-width%3D%22.5%22%20stroke%3D%22${svgEncodeHexColor(borderColor)}%22%20fill%3D%22${svgEncodeHexColor(radioButtonOnBackgroundColor2)}%22%20%20%2F%3E%0A%20%20%20%3C%2Fsvg%3E);`
    console.log(selectedRadio);
    return(
      <div style={{display: 'inline-block'}} >

          <input type='radio' style={{display: 'none'}} />
            <RadioElement
              onClick={(event) => this._onClick(event)}
              selected={selected}
              selectedRadio={selectedRadio}
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