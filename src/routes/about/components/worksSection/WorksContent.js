import React, { Component } from 'react'
import styled from 'styled-components'
import { Text, Button } from '../../../../components/common'
import STYLES from '../../../../constants/styles'

const ContentWrapper = styled.div`
  display: flex;
  padding: 20px;
  margin-top: -100px;
  min-height: 250px;

  @media (max-width: 576px) {
    margin-top: 0;
    padding: 0;
    flex-direction: column;
  }
`

const GameTokenDescWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 20px;
  margin-top: 50px;

  @media (max-width: 576px) {
    margin-top: 0;
    justify-content: center;
    align-items: center;

  }
`

const Description = styled(Text)`
  width: 70%;
  font-style: italic;

  @media (max-width: 576px) {
    width: 100%;
    text-align: center
  }
`

const QuestionAboutWrapper = styled.div`
  flex: 2;
  padding: 20px;
  align-items: 20px;
`

const TitleWrapper = styled.div`

`

const Title = styled(Text)`
  line-height: 1;

  @media (max-width: 576px) {
    text-align: center;
  }
`

const AboutButtonWrapper = styled.div`
  padding: 20px 0;

  @media (max-width: 576px) {
    display: flex;
    justify-content: center;
  }
`

export default class WorksContent extends Component {
  render() {
    return (
      <ContentWrapper>
        <GameTokenDescWrapper>
          <Description align="right">
            <b>PlayGame Token is an ERC20 cryptocurremcy token</b> with smart contract platform enabling game publishers, developers and communities to monesite directly from cryptocurrency crowds all over the world.
          </Description>
          
        </GameTokenDescWrapper>
        <QuestionAboutWrapper>
          <TitleWrapper>
            <Title size="30px">
              CURIOUS ABOUT
            </Title>
            <Title size="30px">
              TECHNOLOGIES BEHIND
            </Title>
            <Title size="30px" color={STYLES.color.orange}>
              PLAYGAME?
            </Title>
          </TitleWrapper>
          <AboutButtonWrapper>
            <Button>
              ONE PAGER
            </Button>
            <Button>
              WHITE PAPER
            </Button>
          </AboutButtonWrapper>
        </QuestionAboutWrapper>
      </ContentWrapper>
    )
  }
}
