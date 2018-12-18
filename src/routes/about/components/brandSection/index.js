import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Col, Text, Button } from '../../../../components/common';
import STYLES from '../../../../constants/styles'
import TeleBox from './TeleBox';
import img from '../../../../assets/images/img_bg_about.png'
import BrandTitle from './BrandTitle'
import AboutBrand from './AboutBrand';

const Wrapper = styled.section`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100%;
  padding-top: 100px;
  padding-bottom: 50px;

  @media (max-width: 576px) {
    background-size: 300%;
  }
`

export default class BrandSection extends Component {
  render() {
    return (
      <Wrapper>
        <BrandTitle />
        <TeleBox />
        <AboutBrand />
      </Wrapper>
    )
  }
}
