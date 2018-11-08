import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
// Create the keyframes
const colorchange = keyframes`
  0% {
    background-color: #6cd1fd;
}

  50% {
    background-color: white;
}
100%{
    background-color: #6cd1fd;

}
`

const Background = styled.div`
    height : 100vh;
    background-color : #6cd1fd;
    background-attachment: fixed;
    animation: ${colorchange} 5s linear infinite;
    z-index: -1;
`
const background1 = styled.img`
  // margin-top: -1000px;
  // margin-left: 100px;
  width: 100%;
  z-index: 0;
`
const background2 = styled.img`
  margin-top: -1000px;
  margin-left: 100px;
  position: absolute;
  margin-right: 200px;
  width: 100%;
  z-index: 1;
`

const ColorChange = styled.div`
  animation: ${colorchange} 2s linear infinite;
`

class WhatWho extends Component {
  render() {
    return (
      <div className="App">
      <Background>
      <background1 src='.\images\Desktop2\s4.png' />
      <background1 src='.\images\Desktop2\Group_2.png'/>

          </Background>
      </div>
    );
  }
}

export default WhatWho; 