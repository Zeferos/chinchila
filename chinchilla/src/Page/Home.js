import React, { Component } from 'react';
import styled from 'styled-components';


const Background = styled.div`
    min-height : 1000px;
    background-color : #9be4ea;
`
const Mascot = styled.img`
  margin-top: -700px;
  margin-left: 250px;
  width: 35%;
`
const Group2 = styled.img`
  
   margin-top: -91.875em;
   margin-left: 20em;
   width: 75%;
   position: 'absolute',
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

class Home extends Component {
  render() {
    return (
      <div>
        <Background>
          <BG2 src='.\images\Desktop1\P1BGnew.png' />
          <Mascot src='.\images\Desktop1\Model-01.png' />
          {/* <HelloWorld src='.\images\Desktop1\Hello W rld.png' />
          <Paws src='.\images\Desktop1\paw 2.png' />
          <Chinchilla src='.\images\Desktop1\Chinchilla.png' /> */}
          <Group2 src='.\images\Desktop1\Group 2.png' />
          <Frame2 src='.\images\Desktop1\Frame.png' />
        </Background>
      </div>
    );
  }
}

export default Home;




// const HelloWorld = styled.img`
// margin-top: -1600px;
// margin-left: 270px;
// width: 60%;
// `
// const Paws = styled.img`
// margin-top: -1620px;
// margin-left: 825px;
// width: 9%;
// `
// const Chinchilla = styled.img`
// margin-top: -1450px;
// margin-left: 1000px;
// width: 25%;
// `
