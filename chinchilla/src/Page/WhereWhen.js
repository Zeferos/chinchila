import React, { Component } from 'react';
import styled from 'styled-components';

const Background = styled.div`
    min-height : 100vh;
    background-color : #6c9957;
    position: relative;
`
const WhereWhenBG = styled.img`
    width: 100vw;
    z-index:1;
`
const WhereWhenFrame = styled.img`
width: 100vw;
    z-index:1;
`
const Content = styled.div`
    top:30vh;
    position: absolute;
    z-index:2;
`
const Box = styled.div`
background: rgba(255, 255, 255, 0.4);
    padding: 10px;
    border-radius: 8px; 
    font-size : 30px;
    font-family: "Mali SemiBold";
`

const Map = styled.img`
width: 80%;
`
const Timeline = styled.img`
 width: 80%;
`
const Head = styled.h1`
    font-size : 55px;
    font-family: "Mali SemiBold";
`
class WhereWhen extends Component {
    render() {
        return (
            <div>
                <Background>
                    <WhereWhenBG src='.\images\WhereWhen\rain-background1-01.png' />
                    <WhereWhenFrame src='.\images\WhereWhen\Frame.png' />
                    <Content className='row col-12'>
                        <div className='col-1' />
                        <Box className='col-5'>
                        <br/>
                            <Head>&nbsp;&nbsp;&nbsp;Where</Head>
                            <br/>
                            <div className='text-center'>
                                <Map src='.\images\WhereWhen\map.png' />
                            </div>
                            <br>
                            </br>
                            <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
                            </p>
                            <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;  คณะเทคโนโลยีสารสนเทศ
                            </p>
                        </Box>
                        <div className='col-1' />
                        <Box className='col-4'>
                        <br/>
                            <Head>&nbsp;&nbsp;&nbsp;When</Head>
                            <div className='text-center'>
                                <Timeline src='.\images\WhereWhen\timeline.png' />
                            </div>
                        </Box>
                        <div className='col-1' />
                    </Content>
                </Background>
            </div>
        );
    }
}

export default WhereWhen;

