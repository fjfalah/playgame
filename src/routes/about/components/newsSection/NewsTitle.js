import React, { Component } from 'react'
import styled from 'styled-components'
import { Text } from '../../../../components/common'
import STYLES from '../../../../constants/styles';

const NewsTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0;

  @media (max-width: 576px) {
    flex-direction: column;
    padding: 20px 0;
  }
`
const TitleWrapper = styled.div`
  flex: 1;
  flex-direction: column;
  padding: 20px;

  @media (max-width: 576px) {
    padding-left: 0;
    padding-right: 0;
  }
`

const Title = styled(Text)`
  line-height: 1;

  @media (max-width: 576px) {
    text-align: center;
  }
`

const MoreNewsWrapper = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;

  @media (max-width: 576px) {
    padding: 0 20px;
  }
`

const MoreNewsButton = styled.a`
  color: #FF9532;
  text-decoration: none;
  font-weight: 500;
`
export default class NewsTitle extends Component {
  render() {
    return (
      <NewsTitleWrapper>
        <TitleWrapper>
          <Title size="36px" align="right" weight="bold">
            PLAYGAME
          </Title>
          <Title size="36px" align="right" weight="bold" color={STYLES.color.orange}>
            NEWS
          </Title>
        </TitleWrapper>
        <MoreNewsWrapper>
          <MoreNewsButton href="#">
            MORE NEWS >
          </MoreNewsButton>
        </MoreNewsWrapper>
      </NewsTitleWrapper>
      
    )
  }
}
