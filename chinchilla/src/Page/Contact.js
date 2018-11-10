import React, { Component } from 'react';
import styled from 'styled-components';

const Background = styled.div`
    min-height : 450px;
    background-color : #2b0f2a;
`
const Contacttxt = styled.div`
text-align: center;
font-family: 'Mali';
font-size : 70px;
color: white;
`
class Contact extends Component {
    render() {
        return (
            <div>
                <Background>
                    <Contacttxt><a>Contact</a></Contacttxt>
                </Background>
            </div>
        );
    }
}

export default Contact;
