import React, { Component } from 'react';
import styled from 'styled-components';

const Background = styled.div`
    min-height : 1000px;
    background-color : #fdd7c0;
`
const FAQBG = styled.img`
 width: 100%;
`
class FAQ extends Component {
    render() {
        return (
            <div>
                <Background>
                <FAQBG src='.\images\FAQ\bg-01.png'/>
                </Background>
            </div>
        );
    }
}

export default FAQ;
