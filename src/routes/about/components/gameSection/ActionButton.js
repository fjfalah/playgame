import React, { Component } from 'react'
import styled from 'styled-components'
import { Button } from '../../../../components/common';


const ActionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ActionTitle = styled.h2`
    text-align: center;
    font-size: 36px;
    font-weight: 500;
    margin-block-start: 0;
`
const ButtonPlayGame = styled(Button)`
    padding: 15px 90px;
    z-index: 1;
`

const WhiteBackground = styled.div`
  width: 100%;
  height: 30px;
  margin-top: -28px;
  background: #ffffff;
`

export default class ActionButton extends Component {
  render() {
    return (
      <ActionWrapper>
        <ActionTitle>
            LET THE FUN BEGIN
        </ActionTitle>
        <ButtonPlayGame>
            PLAY THE GAME
        </ButtonPlayGame>
        <WhiteBackground />
      </ActionWrapper>
    )
  }
}
