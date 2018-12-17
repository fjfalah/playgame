import React, { Component } from 'react'
import styled from 'styled-components'
import SocialMedia from './SocialMedia';
import { Text } from '../common';

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 40px 70px 70px 70px;

  @media (max-width: 576px) {
    padding: 40px 20px 70px 20px;
  }
`

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  padding: 10px 0;
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: stretch;
  }
`

const SocialMediaWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 576px) {
    display: none;
  }
`

const SocialMediaResponsiveWrapper = styled.div`
  display: none;

  @media (max-width: 576px) {
    flex: 1;
    display: flex;
    justify-content: center;
    padding: 20px 0;
  }
`

const PrivacyWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 576px) {
    justify-content: center;
  }
`

const TermWrapper = styled(PrivacyWrapper)`
  justify-content: flex-end;

  @media (max-width: 576px) {
    justify-content: center;
  }
`
const CopyrightWrapper = styled.div`
  flex: 1;

`

const LegalButton = styled.a`
    text-decoration: none;
    font-size: 11px;
    color: #FF9532;
    font-weight: 500;
`
export default class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <ContentWrapper>
          <PrivacyWrapper>
            <LegalButton href="#">PRIVACY POLICY</LegalButton>
          </PrivacyWrapper>
          <SocialMediaWrapper>
            <SocialMedia />
          </SocialMediaWrapper>
          <TermWrapper>
            <LegalButton href="#">TERMS & CONDITIONS</LegalButton>
          </TermWrapper>
          <SocialMediaResponsiveWrapper>
            <SocialMedia />
          </SocialMediaResponsiveWrapper>
        </ContentWrapper>
        <CopyrightWrapper>
          <Text align="center" size="10px" color="#9B9B9B">
            © 2018 PlayGame Ltd. All rights reserved. <br/>
            All trademarks are property of their respective owners
          </Text>
        </CopyrightWrapper>
      </Wrapper>
    )
  }
}
