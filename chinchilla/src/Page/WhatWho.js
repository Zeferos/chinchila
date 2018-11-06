import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
// Create the keyframes
const rotate = keyframes`
  0% {
    background-color: #6cd1fd;
}

  50% {
    background-color: white;
}
100%{
    background-color: #6cd1fd;

}
`;
const Background = styled.div`
    height : 100vh;
    background-color : #6cd1fd;
    animation: ${rotate} 5s linear infinite;
`


// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
//   background-color: red;
  animation: ${rotate} 2s linear infinite;
`;

class WhatWho extends Component {
  render() {
    return (
      <div className="App">
      <Background>
      <Rotate>&lt; 💅 ">">">">&gt;</Rotate>
         <img src='.\images\Desktop2\s4-1.png' width="100%" />
          </Background>
      </div>
    );
  }
}

export default WhatWho; 