import React, { Component } from 'react';
import styled from 'styled-components';

const Background = styled.div`
  height : absolute;
  min-height : 1200px;
  background-color : #6cd1fd;
  margin-bottom : 500px;
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
const Snow = styled.img`
  margin-top : 30px;
  top: 133em;
  left: 5em;
  position: absolute;
  width: 14%;
  z-index: 3;
`
const Model = styled.img`
  margin-top : 30px;
  top: 93em;
  right : 0em;
  position: absolute;
  width: 25%;
  z-index: 4;
`
const Rectangle1 = styled.img`
  position: absolute;
  top: 90em;
  left: 3em;
  width: 960px;
  height: 634px;
  blend: Soft Light;
  opacity: 0.1;
  color: #FFFFFF;
  effect: Drop Shadow;
  Radius: 20px;
  Offset: 0px, 4px;
  z-index : 4;
`

class WhatWho extends Component {
  render() {
    return (
      <div>
          <Background>
            <Group src='.\images\Desktop2\Group.png' />
            <Group_2 src='.\images\Desktop2\Group_2.png' />
            <Frame src='.\images\Desktop2\Frame.png' />
            <Snow src='.\images\Desktop2\snow.png' />
            <Model src='.\images\Desktop2\Model-01ice.png' />
            <Rectangle1 src='.\images\Desktop2\Rectangle1.png' />
          </Background>
      </div>
    );
  }
}

export default WhatWho; 