import React, { Component } from 'react';
import styled from 'styled-components';

const Background = styled.div`
    position:relative;
    /* width: 100vw; */
    min-height : 50vh;
    background-color : #2b0f2a;
    /* padding-top: 50px\ */
    margin-top: 300px;
    /* z-index: 10; */
`
const Contacttxt = styled.h1`
font-size : 70px;
color: white;
`

const Logo = styled.img`
 width: 50%;
`
const LineLeft = styled.div`
    border-right: 5px solid white;
`
const LineRight = styled.div`
    border-left: 5px solid white;
`
class Contact extends Component {
    render() {
        return (
            <div>
                <Background className='text-center'>
                <br/><br/><br/><br/>
                    <Contacttxt>Contact</Contacttxt>
                    <br/>
                    <div className='container'>
                        <div className='row col-12 m-0'>
                            <div className='col-2'>
                                <Logo src='.\images\Contact\phone-call.png' />

                            </div>
                            <LineLeft className='col-1' />
                            <div className='col-6 row m-0'>
                                <a href="https://www.facebook.com/alchemistitbangmod/" className='col'><Logo src='.\images\Contact\facebook.png' /></a>
                                <a href="https://www.instagram.com/?hl=th" className='col'><Logo src='.\images\Contact\instagram.png' /></a>
                                <a href="https://line.me/en/" className='col'><Logo src='.\images\Contact\line.png' /></a>
                            </div>
                            <LineRight className='col-1' />

                            <div className='col-2'>
                                <Logo src='.\images\Contact\mail-black-envelope-symbol.png' />

                            </div>
                        </div>
                    </div>
                </Background>
            </div>
        );
    }
}

export default Contact;

