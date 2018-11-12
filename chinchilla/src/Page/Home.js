import React, { Component } from 'react';
import styled from 'styled-components';


const Background = styled.div`
    min-height : 1000px;
    background-color : #9be4ea;
`
const Mascot = styled.img`
  position: absolute;
  left: 15.625em;
  top: 20em;
  width: 35%;
`
const HelloWorld = styled.img`
  position: absolute;
  left: 16em;
  top: 12em;
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
const Logo = styled.img`
position: absolute;
left: 66%;
top: 60%;
width: 17%;
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
          <Logo src='.\images\Desktop1\logo.png' />
        </Background>
      </div>
    );
  }
}

export default Home;



