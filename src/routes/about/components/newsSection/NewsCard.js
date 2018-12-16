import React, { Component } from 'react'
import styled from 'styled-components'
import { Button } from '../../../../components/common';

const Card = styled.div`
  width: 300px;
  height: 370px;
  display: inline-block;
  margin-right: 10px;
  background: #ffffff;
  /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0639719); */
`

const ImageWrapper = styled.div`
  width: 300px;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
`

const TextWrapper = styled.div`
  padding: 10px;
`

const Desc = styled.p`
  white-space: normal;
  margin: 5px 0;
`

const ReadMoreButton = styled(Button)`
  margin: 0;
  padding: 7px 20px;
`


export default class NewsCard extends Component {
  render() {
    const { image, desc } = this.props
    return (
      <Card>
        <ImageWrapper>
          <Image src={image} />
        </ImageWrapper>
        <TextWrapper>
          <Desc>
            {desc}
          </Desc>
          <ReadMoreButton orange outline small>
            READ MORE
            </ReadMoreButton>
        </TextWrapper>
      </Card>
    )
  }
}
