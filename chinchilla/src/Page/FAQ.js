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
left: 5em;
top: 215em;
width: 25%;
`
const FAQs = styled.div`
position: absolute;
top: 445%;
left: 45%;
font-family: 'Mali SemiBold';
font-size : 90px;
color: black;
`
const FAQsth = styled.div`
position: absolute;
top: 461%;
left: 55%;
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

                </Background>
            </div>
        );
    }
}

export default FAQ;
