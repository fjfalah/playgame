import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const Navbar = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  padding: 40px 0;
  width: 100%;
  z-index: 100;
  background: rgba(255,255,255, 0.5);

  @media (max-width: 576px) {
    padding: 20px;
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
    margin-bottom: 20px;
  }
`

const ImageBrand = styled.img`

`

export default class Header extends Component {
  render() {
    return (
      <Navbar>
        <NavbarWrapper>
          <NavBrandResponsive>
            <ImageBrand src={require('../../assets/images/logo_playgame.svg')} />
          </NavBrandResponsive>
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
