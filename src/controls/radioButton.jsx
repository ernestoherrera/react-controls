import React from 'react';
import styled from 'styled-components';
import PropTyps from 'prop-types';

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
    hoverBackgroundColor : colors.yaleblue,
    hoverBorderColor: colors.yaleblue 
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
      `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='30px' height='30px' viewbox='0 0 20 20'%3E%3Ccircle cx='15' cy='15' r='${props.radius}' stroke-width='.8' stroke='black' fill='${props.fillColor}' class='shape' /%3E%3Ccircle cx='15' cy='15' r='6' stroke-width='.5' stroke='black' fill='%23ffffff' /%3E%3C/svg%3E");` 
  : 
      `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='30px' height='30px' viewbox='0 0 20 20'%3e%3ccircle cx='15' cy='15' r='${props.radius}' stroke-width='.8' fill='none' stroke='black' class='shape' /%3e%3c/svg%3e");`
    }
`;

const RadioLabel = styled.span`
/*   display: inline-block; */
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 7px;
  cursor: pointer;
`

export default class RadioButton extends React.Component{
  constructor(props){
    super(props);
    this.state = { selected: false};
  }

  _onClick = (event) => {
    this.setState({selected: !this.state.selected});
  }

  render =() =>{
    let selected = this.state.selected;
    return(
      <div style={{display: 'inline-block'}} >

          <input type='radio' style={{display: 'none'}} />

            <RadioElement 
              onClick={(event) => this._onClick(event)}
              selected={selected} 
              radius='11' 
              fillColor={colors.primaryblue}/><RadioLabel onClick={(event) => this._onClick(event)} >Default</RadioLabel>
      </div>
    );
  }

}

/* <!-- Ring/Donut centered at (100, 200) with outer radius 100 and inner radius 75 -->
<!-- Note that there's a single pixel missing in the stroke along the outside -->
<path class="shape" fill="blue" stroke="red" d="
          M 100, 200 
          m 0 -100 
          a 100 100 0 1 0 1 0
          z
          m -1 25    
          a 75 75 0 1 1 -1 0     
          Z" /> */