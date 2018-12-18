import React, { Component } from 'react'
import { Row, Col, Text, Button } from '../../../../components/common';
import STYLES from '../../../../constants/styles'
import styled, { css } from 'styled-components'
import GameList from './GameList';
import ActionButton from './ActionButton';

const Wrapper = styled.section`
  background: #F8F8F8;
  border-top: 1px solid #EEEEEE;
`

export default class GameSection extends Component {
  render() {
    return (
      <Wrapper>
        <GameList />
        <ActionButton />
      </Wrapper>
    )
  }
}
