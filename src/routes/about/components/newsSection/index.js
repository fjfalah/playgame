import React, { Component } from 'react'
import styled from 'styled-components'
import NewsTitle from './NewsTitle'
import NewsList from './NewsList'

const Wrapper = styled.section`
    padding: 20px 0;
`

export default class NewsSection extends Component {
  render() {
    return (
      <Wrapper>
        <NewsTitle />
        <NewsList />
      </Wrapper>
    )
  }
}
