import React, { Component } from 'react';
import styled from 'styled-components';

const Background = styled.div`
  height : absolute;
  min-height : 1315px;
  background-color : #6cd1fd;
  // margin-bottom : 500px;
  z-index: -1;
`
const Group_2 = styled.img`
  margin-top : 100px;
  position: absolute;
  top: 83em;
  width: 100%;
  z-index: 0;
`
const Group = styled.img`
  margin-top : 30px;
  top: 72em;
  position: absolute;
  width: 100%;
  z-index: 1;
`
const Frame = styled.img`
  margin-top : 30px;
  top: 130em;
  position: absolute;
  width: 100%;
  z-index: 2;
`

class WhatWho extends Component {
  render() {
    return (
      <div>
          <Background>
            <Group src='.\images\Desktop2\Group.png' />
            <Group_2 src='.\images\Desktop2\Group_2.png' />
            <Frame src='.\images\Desktop2\Frame.png' />
          </Background>
      </div>
    );
  }
}

export default WhatWho; 