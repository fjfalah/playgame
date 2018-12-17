import React, { Component } from 'react'
import styled from 'styled-components'
import { Text } from '../../../../components/common';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 10px;
`

const Title = styled(Text)`
  margin-block-start: 10px;
  margin-block-end: 10px;
  line-height: 1;
`

export default class BrandTitle extends Component {
  render() {
    return (
      <Wrapper>
        <Title as="h1" size="40px" weight="300" align="center">
          POWERING REAL ECONOMY IN THE
        </Title>
        <Title as="h1" size="45px" weight="500" align="center">
          GAME WORLD
        </Title>
      </Wrapper>
    )
  }
}
