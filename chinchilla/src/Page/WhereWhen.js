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
class WhereWhen extends Component {
    render() {
        return (
            <div>
                <Background>
                <WhereWhenBG src='.\images\WhereWhen\rain-background1-01.png'/>
                <WhereWhenFrame src='.\images\WhereWhen\Frame.png'/>
                </Background>
            </div>
        );
    }
}

export default WhereWhen;
