import React, { Component } from 'react';
import styled from 'styled-components';

const Background = styled.div`
position:relative;
    min-height : 100vh;
    background-color : #fdd7c0;
`
const FAQBG = styled.img`
position:absolute;
 width: 100vw;
 z-index: 1;
`
const Leaves = styled.img`
position: absolute;
/* left: 1em;
top: 248em; */
width: 20vw;
z-index:2;
`
const Content = styled.div`
    position:absolute;
    z-index:3;
`
const Qb1 = styled.img`
    width: 50%;
`
const Box = styled.div`
    background: rgba(255, 255, 255, 0.9);
    padding: 10px;
    border-radius: 8px; 
    /* width: 40vw; */
`
const Question = styled.div`
    margin: 0;
    font-size : 25px;

`
class FAQ extends Component {
    render() {
        return (
            <div>
                <Background>
                    <FAQBG src='.\images\FAQ\bg-01.png' />
                    <Leaves src='.\images\FAQ\leaves.png' />
                    <Content className='container col-12'>
                        <div className='col-8 mx-auto'>
                            <div className='text-center'>
                                <h1>FAQs</h1>
                                <h3>คำถามที่พบบ่อย?</h3>
                            </div>
                            <br/>
                            <br/>
                            <Question className='row col-12'>
                                <div className='col-2 text-right'><Qb1 src='.\images\FAQ\Ques.png' /></div>
                                <div className='col-10'>
                                    <Box>
                                        <p>ไม่เก่งด้านการเขียนโค้ดเลยสามารถเข้าได้ไหมครับ?</p>
                                    </Box>
                                </div>
                            </Question>
                            <br/>
                            <Question className='row col-12'>
                                <div className='col-10 text-right'>
                                    <Box className='mr-0'>
                                        <p>เข้าได้เลยครับ ไม่มีใครเกิดมาเก่งทุกอย่าง ความรู้ต่างๆ ล้วนเกิดจากการฝึกฝน</p>
                                    </Box>
                                </div>
                                <div className='col-2'><Qb1 src='.\images\FAQ\Ans.png' /></div>
                            </Question>
                            <br/>
                            <Question className='row col-12'>
                                <div className='col-2 text-right'><Qb1 src='.\images\FAQ\Ques.png' /></div>
                                <div className='col-10'>
                                    <Box>
                                        <p>ค่ายมีกิจกรรมให้ทำเยอะไหมครับ หรือเรียนอย่างเดียว?</p>
                                    </Box>
                                </div>
                            </Question>
                            <br/>
                            <Question className='row col-12'>
                                <div className='col-10 text-right'>
                                    <Box className='mr-0'>
                                        <p>มีกิจกรรมมากมายเลยครับน้องๆ แถมยังมีของรางวัลแจกสำหรับผู้เล่นกิจกรรมด้วยนะครับ</p>
                                    </Box>
                                </div>
                                <div className='col-2'><Qb1 src='.\images\FAQ\Ans.png' /></div>
                            </Question>
                        </div>

                    </Content>

                </Background>
            </div>
        );
    }
}

export default FAQ;
