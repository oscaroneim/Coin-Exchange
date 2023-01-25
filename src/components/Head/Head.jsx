import React, { Component } from 'react'
import styled from 'styled-components';
import logo from './logo.svg';

const Header = styled.header`
background-color: #3da4c6;
min-height: 20vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
font-size: 30px;
color: rgb(244, 244, 248);
`;

const AppTitle = styled.h1`
    font-size: 4rem;
  `;

const Img = styled.img`
 height: 8rem;
 pointer-event: none;
`;

export default class Head extends Component {
  
  render() {
    return (
      <Header>
       <AppTitle>Coin Exchange 3000</AppTitle>
       <Img src={logo} alt="React logo failed to load"/>
       </Header>
    )
  }
}
