import React, { Component } from 'react'
import styled from 'styled-components'
import imgBirdBg from '../../../../assets/images/img_bird_background.png'

const ImageWrapper = styled.div`
  background-image: url(${imgBirdBg});
  background-repeat: repeat-x;
  display: flex;
  height: 400px;

  @media (max-width: 576px) {
    flex-direction: column;
    height: 300px;
    background-size: 300px;
  }
`

const ImagePhoneWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 576px) {
    justify-content: center;
  }
`

const ImagePhone = styled.img`
  height: 400px;
  margin-top: -30px;

  @media (max-width: 576px) {
    height: 300px;
    margin-top: -30px;
  }
`
const  RightImagePhoneWrapper = styled.div`
  flex: 2;
`

export default class GameWorksImage extends Component {
  render() {
    return (
      <ImageWrapper>
        <ImagePhoneWrapper>
          <ImagePhone src={require('../../../../assets/images/img_bird_device.png')} />
        </ImagePhoneWrapper>
        <RightImagePhoneWrapper>

        </RightImagePhoneWrapper>
      </ImageWrapper>
    )
  }
}
