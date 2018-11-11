import React, { Component } from 'react';
import styled from 'styled-components';

const Background = styled.div`
    min-height : 450px;
    background-color : #2b0f2a;
`
const Contacttxt = styled.div`
text-align: center;
font-family: 'Mali SemiBold';
font-size : 70px;
color: white;
`
const Line1 = styled.img`
 position: absolute;
 top: 329em;
 left: 25em;
 width: 0.3%;
`
const Line2 = styled.img`
 position: absolute;
 top: 329em;
 left: 69em;
 width: 0.3%;
`
const Phone = styled.img`
 position: absolute;
 top: 333em;
 left: 14em;
 width: 5%;
`
const Facebook = styled.img`
 position: absolute;
 top: 333em;
 left: 31.5em;
 width: 5%;
`
const Instragram = styled.img`
 position: absolute;
 top: 333em;
 left: 45.5em;
 width: 5%;
`
const LineApp = styled.img`
 position: absolute;
 top: 333em;
 left: 59em;
 width: 5%;
`
const Mail = styled.img`
 position: absolute;
 top: 333em;
 left: 75em;
 width: 5%;
`
class Contact extends Component {
    render() {
        return (
            <div>
                <Background>
                    <Contacttxt><a>Contact</a></Contacttxt>
                    <Phone src='.\images\Contact\phone-call.png' />
                    <Line1 src='.\images\Contact\stline.png' />
                    <Line2 src='.\images\Contact\stline.png' />
                    <a href="https://www.facebook.com/alchemistitbangmod/"><Facebook src='.\images\Contact\facebook.png'  /></a>
                    <a href="https://www.instagram.com/?hl=th"><Instragram src='.\images\Contact\instagram.png' /></a>
                    <a href="https://line.me/en/"><LineApp src='.\images\Contact\line.png' /></a>
                    <Mail src='.\images\Contact\mail-black-envelope-symbol.png' />

                </Background>
            </div>
        );
    }
}

export default Contact;

//href="https://www.facebook.com/alchemistitbangmod/"