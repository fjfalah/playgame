import React, { Component } from 'react'
import styled from 'styled-components'
import { Text } from '../../../../components/common'
import STYLES from '../../../../constants/styles'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: stretch;
  }
`
const TitleWrapper = styled.div`
  flex: 1;
  flex-direction: column;
  padding: 20px;

  @media (max-width: 576px) {
    padding-left: 0;
    padding-right: 0;
    align-items: center;
  }
`

const Title = styled(Text)`
  line-height: 1;

  @media (max-width: 576px) {
    text-align: center;
  }
  
`

const DescriptionWrapper = styled.div`
  flex: 2;
  padding: 20px;

  @media (max-width: 576px) {
    padding-left: 0;
    padding-right: 0;
    align-items: center;
  }
`

const Description = styled(Text)`
  @media (max-width: 576px) {
    text-align: center;
  }
`

export default class AboutBrand extends Component {
  render() {
    return (
      <Wrapper>
        <TitleWrapper>
          <Title size="36px" align="right" weight="bold">
            ABOUT
          </Title>
          <Title size="36px" align="right" weight="bold" color={STYLES.color.orange}>
            PLAYGAME
          </Title>
        </TitleWrapper>
        <DescriptionWrapper>
          <Description size="18px" as="p">
            To simplify marketing and distribution, we are creating playgame.com. A direct-to-play gaming platform where players can play HTML5 games directly from their desktop, mobile browser or even embedded on their own application. No application downloads required. Publishing your game to playgame.com is not mandatory.
          </Description>
          <Description size="18px" as="p">
            We will also be launching a crypto-powered crowdfunding platform that we called the FunFund Initiative.
          </Description>
        </DescriptionWrapper>
      </Wrapper>
    )
  }
}
