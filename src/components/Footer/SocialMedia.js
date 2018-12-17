import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`

const FacebookButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin: 0 5px;
    background: #3B5998;
`

const YoutubeButton = styled(FacebookButton)`
    background: #CE1312;
`

const TwitterButton = styled(FacebookButton)`
    background: #55ACEE;
`

const MediumButton = styled(FacebookButton)`
    background: #FFFFFF;
    border: 1px solid rgba(151, 151, 151, 0.110875);
`

const SubscribeButton = styled.button`
    width: unset;
    height: 30px;
    border-radius: 30px;
    margin: 0 5px;
    background: #FFFFFF;
    padding: 0 15px;
`
const Image = styled.img`
  padding-top: 3px;
`
const ImageMail = styled.img`
    height: 10px;
    margin-right: 5px;
`
export default class SocialMedia extends Component {
  render() {
    return (
      <Wrapper>
        <FacebookButton>
          <Image src={require('../../assets/images/icon-facebook.svg')} />
        </FacebookButton>
        <YoutubeButton>
          <Image src={require('../../assets/images/icon-youtube.svg')} />
        </YoutubeButton>
        <TwitterButton>
          <Image src={require('../../assets/images/icon-twitter.svg')} />
        </TwitterButton>
        <MediumButton>
          <Image src={require('../../assets/images/icon-medium.svg')} />
        </MediumButton>
        <SubscribeButton>
          <ImageMail src={require('../../assets/images/icon-mail.svg')} />
          SUBSCRIBE HERE
        </SubscribeButton>
      </Wrapper>
    )
  }
}
