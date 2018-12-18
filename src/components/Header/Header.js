import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const Navbar = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  padding: 40px 0;
  width: 100%;
  z-index: 100;
  background: ${props => props.navbarBackground};
  transition: .3s;

  @media (max-width: 576px) {
    flex-direction: column;
    padding: 20px;
    background: #FFFFFF;
    border-bottom: 1px solid #EEEEEE;
  }
`
const NavbarWrapper = styled.header`
  display: flex;
  width: 70%;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  font-family: 'poppins';

  @media (max-width: 576px) {
    display: ${props => props.display};
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }
`
const NavMenuActive = (props) => {
  if (props.active) {
    return css`
      color: #FF9532;
    `
  }
}

const NavMenu = styled.a`
  flex: 1;
  display: flex;
  justify-content: center;
  color: #4A4A4A;
  font-size: 12px;
  font-weight: 500;
  padding: 5px 0;
  text-decoration: none;

  ${NavMenuActive}
`

const NavBrand = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;

  @media (max-width: 576px) {
    display: none;
  }
`

const NavBrandResponsive = styled(NavBrand)`
  display: none;

  @media (max-width: 576px) {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }
`

const ToggleMenuButton = styled.button`
  width: 30px;
  height: 30px;
  background: #FF9532;
  border: 0;
  border-radius: 30px;
  outline: 0;
  padding: 3px;
  cursor: pointer;
  transition: all .3s;

    &:hover {
        cursor: pinter
    }

    &:active {
        transform: scale(.95)
    }
`

const ImageBrand = styled.img`

`

const ImageIconBar = styled.img`
  height: 15px;
`

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toggle: 'none',
      navbarBackground: 'rgba(255, 255, 255, 0)'
    }

    this.onToggleMenu = this.onToggleMenu.bind(this)
    this.handleScroll = this.handleScroll.bind(this);
  }

  onToggleMenu(){
    this.setState({toggle: this.state.toggle === 'none' ? 'flex' : 'none'})
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(){
    let scrollOffset = window.pageYOffset

    if (scrollOffset < 50) {
      this.setState({ navbarBackground: 'rgba(255, 255, 255, 0)' })
    } else {
      this.setState({ navbarBackground: 'rgba(255, 255, 255, 1)' })
    }
  }

  render() {
    return (
      <Navbar navbarBackground={this.state.navbarBackground}>
        <NavBrandResponsive>
          <ImageBrand src={require('../../assets/images/logo_playgame.svg')} />
          <ToggleMenuButton onClick={this.onToggleMenu}>
            <ImageIconBar src={require('../../assets/images/bars-solid.svg')}/>
          </ToggleMenuButton>
        </NavBrandResponsive>
        <NavbarWrapper display={this.state.toggle}>
          <NavMenu href="#">GAMES</NavMenu>
          <NavMenu href="#" active>ABOUT US</NavMenu>
          <NavMenu href="#">TEAM</NavMenu>
          <NavMenu href="#">PARTNER</NavMenu>
          <NavBrand>
            <ImageBrand src={require('../../assets/images/logo_playgame.svg')} />
          </NavBrand>
          <NavMenu href="#">CAREER</NavMenu>
          <NavMenu href="#">NEWS</NavMenu>
          <NavMenu href="#">EVENTS</NavMenu>
          <NavMenu href="#">CONTACT</NavMenu>
        </NavbarWrapper>
      </Navbar>
    )
  }
}
