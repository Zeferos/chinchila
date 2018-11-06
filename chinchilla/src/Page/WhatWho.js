import React, { Component } from 'react';
import styled from 'styled-components';

const Background = styled.div`
    min-height : 100vh;
    background-color : #6cd1fd;
`


class WhatWho extends Component {
  render() {
    return (
      <div className="App">
      <Background>
          <p>WhatWho</p>
          </Background>
      </div>
    );
  }
}

export default WhatWho; 