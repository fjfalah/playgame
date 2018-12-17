import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { getGamesAction } from '../../../../actions/gameActions'
import { connect } from 'react-redux'
import GameCard from './GameCard'
import STYLES from '../../../../constants/styles'

const Wrapper = styled.div`
  padding: 20px 0;
  padding-top: 56px;

  @media (max-width: 576px) {
    padding: 20px 0;
  }
`
const ListWrapper = styled.div`
  display: flex;
  padding: 10px 20px;
  /* margin: 0 -20px 10px -20px; */
  overflow-x: auto;
  white-space: nowrap;
`

const MoreGamesButton = styled.a`
  display: flex;
  justify-content: flex-end;
  color: #FF9532;
  text-decoration: none;
  font-weight: 500;
  padding: 20px;
`

class GameList extends Component {
  componentDidMount(){
    this.props.getGamesAction()
  }

  render() {
    const { games } = this.props.games
    console.log(games)
    const gameList = games.map((game) => {
      return (
        <GameCard 
          key={game.id}
          image={game.picture.thumbnail}
          title={game.name}
          desc={game.description}
        />
        
      )
        
    })  
    return (
      <Wrapper>
        <ListWrapper>
          {gameList}
        </ListWrapper>
        <MoreGamesButton href="#">
          MORE GAMES >
        </MoreGamesButton>
      </Wrapper>
      
    )
  }
}

export default connect(
  (state) => ({
    games: state.gameStore
  }),
  { getGamesAction }
)(GameList)


