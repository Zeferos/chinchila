import React, { Component } from 'react';
import styled from 'styled-components'

const Background = styled.div`
    height : 100vh;
    background-color : #6cd1fd;
`


class WhatWho extends Component {
  render() {
    return (
      <div className="App">
      <Background>
          <img src='.\images\Desktop2\BGs2.png' width="100%"/>
          </Background>
      </div>
    );
  }
}

export default WhatWho; 