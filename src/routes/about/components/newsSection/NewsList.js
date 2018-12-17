import React, { Component } from 'react'
import styled from 'styled-components'
import NewsCard from './NewsCard';

const NewsListWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 0;
  overflow-x: auto;
  overflow-y: hidden;
`

const newsData = [
  {
    id_news: 1,
    picture: require('../../../../assets/images/img_news_1.png'),
    description: 'PlayGame Visits China’s Thriving Blockchain Companies',
  },
  {
    id_news: 2,
    picture: require('../../../../assets/images/img_news_2.png'),
    description: 'PlayGame.com Akan Mempercepat Pertumbuhan Bisnis Setelah Sukses Mencapai 600 Juta PXG Hard Cap Dalam Penutupan ICO',
  },
  {
    id_news: 3,
    picture: require('../../../../assets/images/img_news_1.png'),
    description: 'PlayGame.com to Accelerate Business after Successful ICO Closing at 600 Million PXG Hard Cap',
  },
  {
    id_news: 4,
    picture: require('../../../../assets/images/img_news_2.png'),
    description: 'PlayGame.com Akan Mempercepat Pertumbuhan Bisnis Setelah Sukses Mencapai 600 Juta PXG Hard Cap Dalam Penutupan ICO',
  },
  {
    id_news: 5,
    picture: require('../../../../assets/images/img_news_1.png'),
    description: 'PlayGame Visits China’s Thriving Blockchain Companies',
  },
  {
    id_news: 6,
    picture: require('../../../../assets/images/img_news_2.png'),
    description: 'PlayGame.com Akan Mempercepat Pertumbuhan Bisnis Setelah Sukses Mencapai 600 Juta PXG Hard Cap Dalam Penutupan ICO',
  },
  {
    id_news: 7,
    picture: require('../../../../assets/images/img_news_1.png'),
    description: 'PlayGame.com to Accelerate Business after Successful ICO Closing at 600 Million PXG Hard Cap',
  },
  {
    id_news: 8,
    picture: require('../../../../assets/images/img_news_2.png'),
    description: 'PlayGame.com Akan Mempercepat Pertumbuhan Bisnis Setelah Sukses Mencapai 600 Juta PXG Hard Cap Dalam Penutupan ICO',
  },
]
export default class NewsList extends Component {
  render() {
    const newsList = newsData.map((news) => {
      return (
        <NewsCard 
          key={news.id_news}
          image={news.picture}
          desc={news.description}
        />
      )
    })
    return (
      <NewsListWrapper>
        {newsList}
      </NewsListWrapper>
    )
  }
}
