import React, { Component } from 'react'
import styled from 'styled-components'
import WorksContent from './WorksContent';
import GameWorksImage from './GameWorksImage';

const Wrapper = styled.section`
    padding: 0;
    background: #f8f8f8;

`

export default class WorksSection extends Component {
    render() {
        return (
            <Wrapper>
                <GameWorksImage />
                <WorksContent />
            </Wrapper>
        )
    }
}
