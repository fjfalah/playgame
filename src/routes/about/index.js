import BrandSection from './components/brandSection/BrandSection'
import GameSection from './components/gameSection/GameSection'
import PgNewsSection from './components/pgNewsSection'
import PgTimelineSection from './components/pgTimelineSection'
import PgWorksSection from './components/pgWorksSection'

import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
          <BrandSection />
          {/* <PgWorksSection />
          <PgNewsSection />
          <PgTimelineSection /> */}
          <GameSection />
      </div>
    )
  }
}