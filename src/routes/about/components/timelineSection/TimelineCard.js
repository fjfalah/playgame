import React, { Component } from 'react'
import styled from 'styled-components'

const Card = styled.div`
  width: 300px;
  height: 200px;
  display: inline-block;
  background: #ffffff;
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #979797;
`
const Circle = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: #FF9532;
  margin-left: 30px;
`

const CalendarLine = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  height: 20px;
`

const TextWrapper = styled.div`
  padding: 20px;
`

const Date = styled.h4`
  margin: 5px 0;
  font-weight: 500;
`

const Description = styled.p`
  margin: 5px 0;
  white-space: normal;
`

export default class TimelineCard extends Component {
  render() {
    const { date, desc } = this.props
    return (
      <Card>
        <CalendarLine>
          <Line />
          <Circle />
        </CalendarLine>
        <TextWrapper>
          <Date>
            {date}
          </Date>
          <Description>
            {desc}
          </Description>
        </TextWrapper>
      </Card>
    )
  }
}
