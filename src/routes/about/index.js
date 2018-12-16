import BrandSection from './components/brandSection'
import WorksSection from './components/worksSection'
import GameSection from './components/gameSection'
import NewsSection from './components/newsSection'
import TimelineSection from './components/timelineSection'

import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
          <BrandSection />
          <WorksSection />
          <NewsSection />
          <TimelineSection />
          <GameSection />
      </div>
    )
  }
}