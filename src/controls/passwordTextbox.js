import React from 'react';
import styled from 'styled-components';

const PasswordLabel =  

  styled.label`${({size}) => {
    let picSize = 24;
    if(size !== undefined) picSize = size;

    return `   
    width: ${size}px;
    margin-right: 3px;
    background-color: ${colors.whitesmoke};
    background-image: (data:image/svg+xml,%3Csvg%20fill%3D%22%23000000%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22/%3E%0A%20%20%20%20%3Cpath%20d%3D%22M18%208h-1V6c0-2.76-2.24-5-5-5S7%203.24%207%206v2H6c-1.1%200-2%20.9-2%202v10c0%201.1.9%202%202%202h12c1.1%200%202-.9%202-2V10c0-1.1-.9-2-2-2zm-6%209c-1.1%200-2-.9-2-2s.9-2%202-2%202%20.9%202%202-.9%202-2%202zm3.1-9H8.9V6c0-1.71%201.39-3.1%203.1-3.1%201.71%200%203.1%201.39%203.1%203.1v2z%22/%3E%0A%3C/svg%3E);
    background-repeat: no-repeat;
    background-position: left;
    border-radius: 5px 0px 0px 5px;`}
  }`;

export default class PasswordTextbox extends React.Component{
  constructor(props){
    super(props)
  }

  render = () => {
    return();
  }
}