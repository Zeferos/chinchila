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
left: 3em;
// top: 248em;
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
const Head = styled.h1`
    font-size : 70px;
    font-family: "Mali SemiBold";
`
const Que = styled.p`
    font-size : 32px;
    font-family: "Mali";
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
                            <br/><br/><br/><br/><br/><br/>
                                <Head>FAQs</Head>
                                <h3>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;คำถามที่พบบ่อย?</h3>
                            </div>
                            <br/>
                            <br/>
                            <Question className='row col-12'>
                                <div className='col-2 text-right'><Qb1 src='.\images\FAQ\Ques.png' /></div>
                                <div className='col-10'>
                                    <Box>
                                        <Que>&emsp;ไม่เก่งด้านการเขียนโค้ดเลยสามารถเข้าได้ไหมครับ?</Que>
                                    </Box>
                                </div>
                            </Question>
                            <br/>
                            <Question className='row col-12'>
                                <div className='col-10 text-right'>
                                    <Box className='mr-0'>
                                        <Que>เข้าได้เลยครับ ไม่มีใครเกิดมาเก่งทุกอย่าง ความรู้ต่างๆ ล้วนเกิดจากการฝึกฝน</Que>
                                    </Box>
                                </div>
                                <div className='col-2'><Qb1 src='.\images\FAQ\Ans.png' /></div>
                            </Question>
                            <br/>
                            <Question className='row col-12'>
                                <div className='col-2 text-right'><Qb1 src='.\images\FAQ\Ques.png' /></div>
                                <div className='col-10'>
                                    <Box>
                                        <Que>&emsp;ค่ายมีกิจกรรมให้ทำเยอะไหมครับ หรือเรียนอย่างเดียว?</Que>
                                    </Box>
                                </div>
                            </Question>
                            <br/>
                            <Question className='row col-12'>
                                <div className='col-10 text-right'>
                                    <Box className='mr-0'>
                                        <Que>มีกิจกรรมมากมายเลยครับน้องๆ แถมยังมีของรางวัลแจกสำหรับผู้เล่นกิจกรรมด้วยนะครับ</Que>
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
