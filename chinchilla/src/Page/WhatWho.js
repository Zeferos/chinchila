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
// const Group3 = styled.img`
//     /* margin-top : 30px;
//     top: 72em; */
//   position: absolute;
//   width: 100%;
//   z-index: 2;
//   bottom: -100vh;
// `
const Snow = styled.img`
  // margin-top : 30px;
  // top: 123em;
  left: 11em;
  position: absolute;
  width: 18%;
  bottom: 0;
  z-index: 3;
`
const Model = styled.img`
  /* margin-top : 30px;
  top: 93em; */
  right : 0em;
  position: absolute;
  width: 30%;
  z-index: 5;
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
  font-size : 30px;
`
const RectangleWhat = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.4);
  width: 60vw;
  // margin-left: 50px;
  margin-left: 20%;
  padding: 20px;
  border-radius: 8px;
  /* top: 100px; */
  /* z-index : 4; */
  font-size : 30px;
`
const Head = styled.h1`
    font-size : 55px;
    font-family: "Mali";
`
class WhatWho extends Component {
  render() {
    return (
      <div>
        <Background>
          <Group src='.\images\Desktop2\Group.png' />
          <Group_2 src='.\images\Desktop2\Group_2.png' />
          {/* <Group3 src='.\images\Desktop2\Frame.png' /> */}
          <Content>
            <RectangleWhat>
              <Head>&nbsp;&nbsp;&nbsp;What?</Head>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ค่ายสำหรับน้องๆที่มีความสนใจด้าน IT โดยค่ายนี้จะให้ความรู้ 4 ด้าน คือ</p>
              <div className='col-12 row text-center mt-5 mb-5'>
                <div className='col-6'>
                <img src='.\images\Desktop2\Who\1077650.png'  />
                &nbsp;  &nbsp; Design                
                </div>
                <div className='col-6'>
                <img src='.\images\Desktop2\Who\1063206.png'  />
                &nbsp;  &nbsp; Font-End
                </div>
              </div>
              <div className='col-12 row text-center mt-5 mb-5'>
                <div className='col-6'>
                <img src='.\images\Desktop2\Who\993717.png'  />
                &nbsp;  &nbsp; Infrastructure
                </div>
                <div className='col-6'>
                <img src='.\images\Desktop2\Who\262545.png'  />
                &nbsp;  &nbsp; Game
                </div>
              </div>
              <p>ค่ายนี้ประกอบด้วยการเรียนและปฏิบัติจริง มีกิจกรรมต่างๆมากมาย รวมถึงมีเกมให้เล่นและได้รู้จักเพื่อนๆมากมายภายในค่ายได้ที่ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี </p>
            </RectangleWhat>
            <RectangleWho>
              <div className='row col-12'>
                <div className='col-2'>
                  <Head>
                    Who?
                    </Head>
                <img src='.\images\Desktop2\33308.png'  />
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