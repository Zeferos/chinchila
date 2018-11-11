import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const Background = styled.div`
  height : infinite;
  background-color : #6cd1fd;
`
const background1 = styled.img`
  margin-bottom: -5500px;
  margin-left: 50px;
  width: 100%;
  z-index: 0;
`
const background2 = styled.img`
  bottom: 5500px;
  width: 100%;
  z-index: 1;
`

class WhatWho extends Component {
  render() {
    return (
      <div className="App">
          <Background>
            <background1><img src='.\images\Desktop2\Group_2.png' /></background1>
            <background2><img src='.\images\Desktop2\Group.png' /></background2>
          </Background>
      </div>
    );
  }
}

export default WhatWho; 