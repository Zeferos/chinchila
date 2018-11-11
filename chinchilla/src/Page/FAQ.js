import React, { Component } from 'react';
import styled from 'styled-components';

const Background = styled.div`
    min-height : 1000px;
    background-color : #fdd7c0;
`
const FAQBG = styled.img`
 width: 100%;
`
const Leaves = styled.img`
position: absolute;
left: 1em;
top: 248em;
width: 25%;
`
const FAQs = styled.div`
position: absolute;
top: 530%;
left: 42.5%;
font-family: 'Mali SemiBold';
font-size : 90px;
color: black;
`
const FAQsth = styled.div`
position: absolute;
top: 546%;
left: 52.5%;
font-family: 'Mali';
font-size : 35px;
color: black;
`
const Qb1 = styled.img`
position: absolute;
width: 925px;
height: 79px;
left: 308px;
top: 275em;

background: #ECECF1;
mix-blend-mode: hard-light;
border-radius: 20px;
`
const Ab1 = styled.img`
position: absolute;
width: 970px;
height: 133px;
left: 19em;
top: 282.5em;
background: #ECECF1;
mix-blend-mode: hard-light;
border-radius: 20px;
`
const Qb2 = styled.img`
position: absolute;
width: 985px;
height: 79px;
left: 308px;
top: 293.3em;

background: #ECECF1;
mix-blend-mode: hard-light;
border-radius: 20px;
`
const Ab2 = styled.img`
position: absolute;
width: 1000px;
height: 133px;
left: 17em;
top: 301em;

background: #ECECF1;
mix-blend-mode: hard-light;
border-radius: 20px;
`
const PQ1 = styled.img`
position: absolute;
height: 44px;
left: 255px;
top: 276em;
mix-blend-mode: hard-light;
transform: rotate(-1deg);
`
const PQ2 = styled.img`
position: absolute;
height: 44px;
left: 255px;
top: 294.5em;
mix-blend-mode: hard-light;
transform: rotate(-1deg);
`
const PA1 = styled.img`
position: absolute;
height: 44px;
left: 81em;
top: 285em;
mix-blend-mode: hard-light;
transform: rotate(-1.5deg);
`
const PA2 = styled.img`
position: absolute;
height: 44px;
left: 81em;
top: 303.5em;
mix-blend-mode: hard-light;
transform: rotate(-1.5deg);
`
const Qs1 = styled.img`
position: absolute;
width: 5%;
left: 10em;
top: 275em;
`
const Qs2 = styled.img`
position: absolute;
width: 5%;
left: 10em;
top: 293.7em;
`
const An1 = styled.img`
position: absolute;
width: 6%;
left: 83.5em;
top: 284em;
`
const An2 = styled.img`
position: absolute;
width: 6%;
left: 83.5em;
top: 302.5em;
`
const Q1 = styled.div`
position: absolute;
top: 569.6%;
left: 21.5%;
font-family: 'Mali';
font-size : 35px;
color: black;
`
const A1 = styled.div`
position: absolute;
top: 585%;
left: 21.5%;
font-family: 'Mali';
font-size : 35px;
color: black;
`
const Q2 = styled.div`
position: absolute;
top: 607%;
left: 21.5%;
font-family: 'Mali';
font-size : 35px;
color: black;
`
const A2 = styled.div`
position: absolute;
top: 623.2%;
left: 19%;
font-family: 'Mali';
font-size : 35px;
color: black;
`
class FAQ extends Component {
    render() {
        return (
            <div>
                <Background>
                    <FAQBG src='.\images\FAQ\bg-01.png' />
                    <Leaves src='.\images\FAQ\leaves.png' />
                    <FAQs><a>FAQs</a></FAQs>
                    <FAQsth><a>คำถามที่พบบ่อย?</a></FAQsth>
                    <Qb1 src='.\images\FAQ\RectangleQ.png' />
                    <Ab1 src='.\images\FAQ\RectangleA.png' />
                    <Qb2 src='.\images\FAQ\RectangleQ.png' />
                    <Ab2 src='.\images\FAQ\RectangleA.png' />
                    <PQ1 src='.\images\FAQ\PolygonL.png' />
                    <PQ2 src='.\images\FAQ\PolygonL.png' />
                    <PA1 src='.\images\FAQ\PolygonR.png' />
                    <PA2 src='.\images\FAQ\PolygonR.png' />
                    <Qs1 src='.\images\FAQ\Ques.png' />
                    <Qs2 src='.\images\FAQ\Ques.png' />
                    <An1 src='.\images\FAQ\Ans.png' />
                    <An2 src='.\images\FAQ\Ans.png' />
                    <Q1>Q : ไม่เก่งด้านการเขียนโค้ดเลยสามารถเข้าได้ไหมครับ?</Q1>
                    <A1>A : เข้าได้เลยครับ ไม่มีใครเกิดมาเก่งทุกอย่าง ความรู้ต่างๆ<br></br>ล้วนเกิดจากการฝึกฝน</A1>
                    <Q2>Q : ค่ายมีกิจกรรมให้ทำเยอะไหมครับ หรือเรียนอย่างเดียว?</Q2>
                    <A2>A : มีกิจกรรมมากมายเลยครับน้องๆ แถมยังมีของรางวัลแจก<br></br>สำหรับผู้เล่นกิจกรรมด้วยนะครับ</A2>

                </Background>
            </div>
        );
    }
}

export default FAQ;
