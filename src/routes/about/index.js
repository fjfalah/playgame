import React, { Component } from 'react'
import BrandSection from './components/brandSection'
import WorksSection from './components/worksSection'
import GameSection from './components/gameSection'
import NewsSection from './components/newsSection'
import TimelineSection from './components/timelineSection'
import styled from 'styled-components'

const Wrapper = styled.div`

`
export default class About extends Component {
  render() {
    return (
      <Wrapper>
          <BrandSection />
          <WorksSection />
          <NewsSection />
          <TimelineSection />
          <GameSection />
      </Wrapper>
    )
  }
}