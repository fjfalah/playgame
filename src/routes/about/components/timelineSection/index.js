import React, { Component } from 'react'
import styled from 'styled-components'
import TimelineTitle from './TimelineTitle';

const Wrapper = styled.section`
    padding: 20px 0;
`

export default class TimelineSection extends Component {
  render() {
    return (
      <Wrapper>
        <TimelineTitle />
      </Wrapper>
    )
  }
}
