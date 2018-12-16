import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const Card = styled.div`
  width: 164px;
  height: 280px;
  display: inline-block;
  margin-right: 10px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0639719);
  border-radius: 15px;
`

const ImageWrapper = styled.div`
  height: 164px;
  width: 164px;
  background: #f4f4f4;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`

const TextWrapper = styled.div`
  padding: 10px;
`

const Title = styled.h4`
  margin: 5px 0;
`

const Desc = styled.p`
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 60px;
  margin: 5px 0;

`
export default class GameCard extends Component {

  render() {
    const { image, title, desc } = this.props
    return (
      <Card>
        <ImageWrapper>
          {/* {image} */}
        </ImageWrapper>
        <TextWrapper>
          <Title>
            {title}
          </Title>
          <Desc>
            {desc}
          </Desc>
        </TextWrapper>
      </Card>
    )
  }
}