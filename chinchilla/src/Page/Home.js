import React, { Component } from 'react';
import styled from 'styled-components';


const Background = styled.div`
    min-height : 100vh;
    background-color : #65bafc;
`

class Home extends Component {
  render() {
    return (
      <div>
        <Background>
          <h1>ฮาย</h1>
          <h2>เฮลโหลว</h2>
        </Background>
      </div>
    );
  }
}

export default Home;
