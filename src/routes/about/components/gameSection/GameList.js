import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { getGamesAction } from '../../../../actions/gameActions'
import { connect } from 'react-redux'
import GameCard from './GameCard'
import STYLES from '../../../../constants/styles'

const Wrapper = styled.div`
  padding: 20px;
`
const ListWrapper = styled.div`
  padding: 10px 20px;
  margin: 0 -20px 10px -20px;
  overflow-x: auto;
  white-space: nowrap;
`

const ButtonMoreGames = styled.a`
  display: flex;
  justify-content: flex-end;
  color: #FF9532;
  text-decoration: none;
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
        <ButtonMoreGames href="#">
          MORE GAMES >
        </ButtonMoreGames>
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


