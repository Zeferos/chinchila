import React, { Component } from 'react';
import styled from 'styled-components';


const Background = styled.div`
    min-height : 100vh;
    background-color : #9be4ea;
`
const Mascot = styled.img`
  margin-top: -700px;
  margin-left: 250px;
  width: 35%;
`

const HelloWorld = styled.img`
margin-top: -1600px;
margin-left: 270px;
width: 60%;
`
const Paws = styled.img`
margin-top: -1620px;
margin-left: 825px;
width: 9%;
`
const Chinchilla = styled.img`
margin-top: -1450px;
margin-left: 1000px;
width: 25%;
`
class Home extends Component {
  render() {
    return (
      <div>
        <Background>
          <img src='.\images\Desktop1\P1BGnew.png' width="100%" />
          <Mascot src='.\images\Desktop1\Model-01.png' />
          <HelloWorld src='.\images\Desktop1\Hello W rld.png' />
          <Paws src='.\images\Desktop1\paw 2.png' />
          <Chinchilla src='.\images\Desktop1\Chinchilla.png' />
          
        </Background>
      </div>
    );
  }
}

export default Home;
