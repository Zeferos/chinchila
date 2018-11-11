import React, { Component } from 'react';
import styled from 'styled-components';

const Background = styled.div`
  height : absolute;
  min-height : 1315px;
  background-color : #6cd1fd;
  background-image: linear-gradient(#6cd1fd,white,#79bacc);
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
  top: 88em;
  left: 3.5em;
  width: 960px;
  height: 634px;
  opacity: 0.5;
  blend : soft-light;
  color: white;
  Radius: 20px;
  z-index : 4;
`
const Rectangle2 = styled.img`
  position: absolute;
  margin-top : 30px;
  top: 132.7em;
  right: 6em;
  width: 980px;
  height: 213px;
  opacity: 0.65;
  blend : soft-light;
  color: white;
  Radius: 100px;
  z-index : 4;
`
const Who = styled.div`
  position: absolute;
  top: 33.42em;
  right: 13.75em;
  textAlign: 'center';
  font-family: 'Mali SemiBold';
  font-size : 65px;
  color: black;
  z-index : 6;
  
`
const Whotext = styled.div`
  position: absolute;
  top: 72.95em;
  right: 11.9em;
  textAlign: 'center';
  font-family: 'Mali SemiBold';
  font-size : 30px;
  color: black;
  z-index : 6;
`
const Whoimg = styled.img`
  margin-top : 30px;
  top: 139.3em;
  right: 58em;
  position: absolute;
  width: 4%;
  z-index: 4;
`

class WhatWho extends Component {
  render() {
    return (
      <div>
          <Background>
            <Group src='.\images\Desktop2\Group.png' />
            <Group_2 src='.\images\Desktop2\Group_2.png' />
            <Rectangle2 src='.\images\Desktop2\Rectangle1.png' />
            <Who><a>Who</a></Who>
            <Whotext><a>เหมาะกับนักศึกษาที่ต้องการเรียนรู้เพิ่มเติม<br></br>นอกห้องเรียนและอยากมีประสบการณ์ที่เพิ่ม<br></br>มากขึ้นด้าน IT</a></Whotext>

            <Snow src='.\images\Desktop2\snow.png' />
            <Model src='.\images\Desktop2\Model-01ice.png' />
            <Rectangle1 src='.\images\Desktop2\Rectangle1.png' />
            <Whoimg src='.\images\Desktop2\33308.png' />

          </Background>
      </div>
    );
  }
}

export default WhatWho; 