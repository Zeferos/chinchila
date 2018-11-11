import React, { Component } from 'react';
import styled from 'styled-components';

const Background = styled.div`
  position: relative;
  min-height : 100vh;
  background-color : #6cd1fd;
  background-image: linear-gradient(#6cd1fd,white,#79bacc);
  /* z-index: -1; */
`
const Group_2 = styled.img`
  /* margin-top : 100px; */
  position: absolute;
  /* top: 83em; */
  width: 100%;
  z-index: 1;
  bottom: 0;
`
const Group = styled.img`
    /* margin-top : 30px;
    top: 72em; */
  position: absolute;
  width: 100%;
  z-index: 2;
  bottom: -50vh;
`
const Snow = styled.img`
  /* margin-top : 30px;
  top: 133em; */
  left: 5em;
  position: absolute;
<<<<<<< HEAD
  width: 14%;
  z-index: 5;
  bottom: 0;
=======
  width: 22%;
  z-index: 3;
>>>>>>> 5cc8dd22083137eaad6b8c6951a04f639777aec1
`
const Model = styled.img`
  /* margin-top : 30px;
  top: 93em; */
  right : 0em;
  position: absolute;
<<<<<<< HEAD
  width: 25%;
  z-index: 5;
=======
  width: 30%;
  z-index: 4;
`
const Rectangle1 = styled.img`
  position: absolute;
  top: 88em;
  left: 3.5em;
  width: 1200px;
  height: 634px;
  opacity: 0.3;
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
  opacity: 0.35;
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
>>>>>>> 5cc8dd22083137eaad6b8c6951a04f639777aec1
`
const Content = styled.div`
  position: absolute;
  z-index: 4;
  padding-top: 100px;
`
const RectangleWho = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.4);
  width: 60vw;
  left: 30vw;
  padding: 20px;
  border-radius: 8px;
  top: 100px;
  /* z-index : 4; */
`
const RectangleWhat = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.4);
  width: 60vw;
  margin-left: 20px;
  padding: 20px;
  border-radius: 8px;
  /* top: 100px; */
  /* z-index : 4; */
`

class WhatWho extends Component {
  render() {
    return (
      <div>
        <Background>
          <Group src='.\images\Desktop2\Group.png' />
          <Group_2 src='.\images\Desktop2\Group_2.png' />
          <Content>
            <RectangleWhat>
              <h1>What?</h1>
              <p>ค่ายสำหรับน้องๆที่มีความสนใจด้าน IT โดยค่ายนี้จะให้ความรู้ 4 ด้าน คือ</p>
              <div className='col-12 row text-center mt-5 mb-5'>
                <div className='col-6'>
                  Design
                </div>
                <div className='col-6'>
                  Font-End
                </div>
              </div>
              <div className='col-12 row text-center mt-5 mb-5'>
                <div className='col-6'>
                  Infrastructure
                </div>
                <div className='col-6'>
                  Game
                </div>
              </div>
              <p>ค่ายนี้ประกอบด้วยการเรียนและปฏิบัติจริง มีกิจกรรมต่างๆมากมาย รวมถึงมีเกมให้เล่นและได้รู้จักเพื่อนๆมากมายภายในค่ายได้ที่ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี </p>
            </RectangleWhat>
            <RectangleWho>
              <div className='row col-12'>
                <div className='col-2'>
                  <h1>
                    Who
                </h1>
                  <p>
                    {/*icon*/}
                  </p>
                </div>
                <div className='col-10'>
                  <p>
                    เหมาะกับนักศึกษาที่ต้องการเรียนรู้เพิ่มเติม นอกห้องเรียนและอยากมีประสบการณ์ที่เพิ่มมากขึ้นด้าน IT
                </p>
                </div>
              </div>
            </RectangleWho>
          </Content>

          <Snow src='.\images\Desktop2\snow.png' />
          <Model src='.\images\Desktop2\Model-01ice.png' />
        </Background>
      </div>
    );
  }
}

export default WhatWho; 