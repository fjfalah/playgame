import React, { Component } from 'react'
import styled from 'styled-components'
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
