import React, { Component } from 'react';
import styled from 'styled-components';


const Background = styled.div`
    min-height : 1000px;
    background-color : #9be4ea;
`
const Mascot = styled.img`
  // margin-top: -700px;
  // margin-left: 250px;
  // width: 35%;
  position: absolute;
  left: 15.625em;
  top: 20em;
  width: 35%;
`
const HelloWorld = styled.img`

  //  margin-top: -91.875em;
  //  margin-left: 20em;
  //  width: 75%;

  // position: absolute;
  // left: 19.70em;
  // top: 10.5em;
  // width: 75%;

  position: absolute;
  left: 12.75em;
  top: 10em;
  width: 75%;
`

const Frame2 = styled.img`
 margin-top: -48px;
 margin-left: 0px;
 width: 100%;
`
const BG2 = styled.img`
margin-top: 0;
margin-left: 0;
width: 100%;
`

const Alchemist = styled.img`
position: absolute;
left: 86%;
top: 66%;
width: 3%;
`
const SIT = styled.img`
position: absolute;
left: 76%;
top: 66%;
width: 8.5%;
`
const KMUTT = styled.img`
position: absolute;
left: 71%;
top: 63%;
width: 3.7%;
`


class Home extends Component {
  render() {
    return (
      <div>
        <Background>
          <BG2 src='.\images\Desktop1\P1BGnew.png' />
          <Mascot src='.\images\Desktop1\Model-01.png' />
          <HelloWorld src='.\images\Desktop1\Group 2.png' />
          <Frame2 src='.\images\Desktop1\Frame.png' />
          <Alchemist src='.\images\Desktop1\alchemist.png' />
          <KMUTT src='.\images\Desktop1\kmutt.png' />
          <SIT src='.\images\Desktop1\sit.png' />

        </Background>
      </div>
    );
  }
}

export default Home;



