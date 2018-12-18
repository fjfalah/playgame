import React, { Component } from 'react'
import styled from 'styled-components'
import { Text } from '../../../../components/common'
import STYLES from '../../../../constants/styles';
const TimelineTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0;

  @media (max-width: 576px) {
    padding: 20px 0;
    flex-direction: column;
  }
`

const TitleWrapper = styled.div`
  flex: 1;
  flex-direction: column;
  padding: 20px;

  @media (max-width: 576px) {
    padding: 0 20px;
  }
`

const Title = styled(Text)`
  line-height: 1;

  @media (max-width: 576px) {
    text-align: center;
    }
`

const TitleRightWrapper = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`

const TitleTimelineMonth = styled.div`
  flex: 2;
`

const MoreEventsWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding: 20px 0;

  @media (max-width: 576px) {
    align-self: flex-end;
  }
`
const MoreEventsButton = styled.a`
  color: #FF9532;
  text-decoration: none;
  font-weight: 500;
`
export default class TimelineTitle extends Component {
  render() {
    return (
      <TimelineTitleWrapper>
        <TitleWrapper>
          <Title size="36px" align="right" weight="bold">
            EVENT
          </Title>
          <Title size="36px" align="right" weight="bold" color={STYLES.color.orange}>
            CALENDAR
          </Title>
        </TitleWrapper>
        <TitleRightWrapper>
          <TitleTimelineMonth>
            <Title size="51px" align="left" weight="normal">
              NOVEMBER
            </Title>
          </TitleTimelineMonth>
          <MoreEventsWrapper>
            <MoreEventsButton href="#">
              MORE EVENTS >
            </MoreEventsButton>
          </MoreEventsWrapper>
        </TitleRightWrapper>
      </TimelineTitleWrapper>
    )
  }
}
