import React, { Component } from 'react';
import styled from 'styled-components';

const Background = styled.div`
    min-height : 1000px;
    background-color : #6c9957;
`
const WhereWhenBG = styled.img`
 width: 100%;
`
const WhereWhenFrame = styled.img`
 width: 100%;
`
const Rex1 = styled.img`
 position: absolute;
//  top: 135em;
top: 170em;
 left: 55em;
 width: 40%;
 height: 130%;
 opacity: 0.2;
`
const Rex2 = styled.img`
 position: absolute;
 top: 170em;
 left: 2em;
 width: 55%;
 height: 130%;
 opacity: 0.2;
`
const Map = styled.img`
position: absolute;
top: 181em;
left: 8.3em;
width: 42%;
`
const Timeline = styled.img`
 position: absolute;
 top: 182em;
 left: 62em;
 width: 27.5%;
`
const Where = styled.div`
position: absolute;
top: 355%;
left: 7%;
font-family: 'Mali SemiBold';
font-size : 90px;
color: black;
`
const When = styled.div`
position: absolute;
top: 355%;
left: 63%;
font-family: 'Mali SemiBold';
font-size : 90px;
color: black;
`
const Name = styled.div`
position: absolute;
top: 458%;
left: 7%;
textAlign: 'center';
font-family: 'Mali SemiBold';
font-size : 35px;
color: black;
`
//387&
class WhereWhen extends Component {
    render() {
        return (
            <div>
                <Background>
                    <WhereWhenBG src='.\images\WhereWhen\rain-background1-01.png' />
                    <WhereWhenFrame src='.\images\WhereWhen\Frame.png' />
                    <Rex1 src='.\images\WhereWhen\Rectangle.png' />
                    <Rex2 src='.\images\WhereWhen\Rectangle2.png' />
                    <Where><a>Where</a></Where>
                    <When><a>When</a></When>
                    <Map src='.\images\WhereWhen\map.png' />
                    <Timeline src='.\images\WhereWhen\timeline.png' />
                    <Name><a>คณะเทคโนโลยีสารสนเทศ <br></br> มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</a></Name>
                </Background>
            </div>
        );
    }
}

export default WhereWhen;

