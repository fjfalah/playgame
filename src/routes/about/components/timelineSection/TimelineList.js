import React, { Component } from 'react'
import styled from 'styled-components'
import TimelineCard from './TimelineCard';

const TimelineListWrapper = styled.div`
    display: flex;
    padding: 0;
    overflow-x: auto;
    flex-wrap: nowrap;
`

const timelineData = [
  {
    id_timeline: 1,
    date: '23/11/2018',
    descriction: 'BIG NEWS! Announcement for PXG Listing.Stay Tuned!'
  },
  {
    id_timeline: 2,
    date: '20/11/2018',
    descriction: 'Playgame introducing The Proof Of Play to Public'
  },
  {
    id_timeline: 3,
    date: '15/11/2018',
    descriction: 'Start Tower Block competition on Telegram'
  },
  {
    id_timeline: 4,
    date: '6/11/2018',
    descriction: 'BIG NEWS! Announcement for PXG Listing.Stay Tuned!'
  },
  {
    id_timeline: 5,
    date: '3/11/2018',
    descriction: 'Playgame introducing The Proof Of Play to Public'
  },
  {
    id_timeline: 6,
    date: '1/11/2018',
    descriction: 'Start Tower Block competition on Telegram'
  },
  {
    id_timeline: 7,
    date: '23/11/2018',
    descriction: 'BIG NEWS! Announcement for PXG Listing.Stay Tuned!'
  },
  {
    id_timeline: 8,
    date: '20/11/2018',
    descriction: 'Playgame introducing The Proof Of Play to Public'
  },
  {
    id_timeline: 9,
    date: '15/11/2018',
    descriction: 'Start Tower Block competition on Telegram'
  },
  {
    id_timeline: 10,
    date: '6/11/2018',
    descriction: 'BIG NEWS! Announcement for PXG Listing.Stay Tuned!'
  },
  {
    id_timeline: 11,
    date: '3/11/2018',
    descriction: 'Playgame introducing The Proof Of Play to Public'
  },
  {
    id_timeline: 12,
    date: '1/11/2018',
    descriction: 'Start Tower Block competition on Telegram'
  },
]

export default class TimelineList extends Component {
  render() {
    const timelineList = timelineData.map((timeline) => {
      return (
        <TimelineCard
          key={timeline.id_timeline}
          date={timeline.date}
          desc={timeline.descriction}
        />
      )
    })

    return (
      <TimelineListWrapper>
        {timelineList}
      </TimelineListWrapper>
    )
  }
}
