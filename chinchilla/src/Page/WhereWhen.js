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
 top: 135em;
 left: 55em;
 width: 40%;
 height: 120%;
 opacity: 0.2;
`
const Rex2 = styled.img`
 position: absolute;
 top: 135em;
 left: 2em;
 width: 55%;
 height: 120%;
 opacity: 0.2;
`
class WhereWhen extends Component {
    render() {
        return (
            <div>
                <Background>
                    <WhereWhenBG src='.\images\WhereWhen\rain-background1-01.png' />
                    <WhereWhenFrame src='.\images\WhereWhen\Frame.png' />
                    <Rex1 src='.\images\WhereWhen\Rectangle.png' />
                    <Rex2 src='.\images\WhereWhen\Rectangle2.png' />

                </Background>
            </div>
        );
    }
}

export default WhereWhen;
