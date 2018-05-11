import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import Button from './Button'
import Hamburger from './Hamburger'
// import OverlayMenu from '../containers/OverlayMenu'
import logo from '../assets/ng-logo.png'

injectGlobal`
  .highlight {
    background: rgba(0,0,0,0.6) !important;
    ${'' /* a {
      font-size: 18px !important;
    } */}
  }
`

const Wrapper = styled.div.attrs({
  id: 'navbar'
})`
  z-index: 99;
  margin: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: all 600ms;
  background: rgb(0, 0, 0, 0);
`

const Nav = styled.nav`
  max-width: 1200px;
  display: flex;
  box-sizing: border-box;
  padding: 0 1em;
  align-items: center;
  margin: auto;
`

const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-align: right;

  @media (max-width: 780px) {
    display: none;
  }
`

const Item = styled.li`
  float: left;

  a {
    display: block;
    padding: .5em 1em;
    margin: 0 .25em;
    font-size: 18px;
    font-weight: normal;
    color: white;
    text-decoration: none;
    transition: all 200ms;
  }

  a:hover {
    border-radius: 20px;
    background: hsla(0, 0%, 100%, 0.2);
  }

  &:last-child {
    margin-right: .5em;
  }
`

const Brand = styled.img`
  padding: .5em 0;
  height: 50px;
  transition: all 300ms;

  @media (max-width: 780px) {
    height: 40px;
  }
`

const Right = styled.div`
  display: flex;
  margin-left: auto;
`

const Collapse = styled.div`
  display: flex;
  @media (max-width: 780px) {
    display: none;
  }
`

const OnSmall = styled.div`
  display: none;
  @media (max-width: 780px) {
    display: block;
  }
`

const menus = [
  { name: 'HOME', href: '/home' },
  { name: 'TIMELINE', href: '/news' },
  { name: 'SPEAKERS', href: '/contact' },
  { name: 'STAGES', href: '/about' },
  { name: 'ABOUT US', href: '/about' },
]

class Navbar extends Component {
  componentDidMount () {
    const alterNavbar = () => {
      if (window.scrollY > 150) {
        document.getElementById('navbar').classList.add('highlight')
      } else {
        document.getElementById('navbar').classList.remove('highlight')
      }
    }
    window.addEventListener('scroll', alterNavbar)
    alterNavbar()
  }

  render () {
    return (
      <Wrapper>
        <Nav>
          <a href="/"><Brand src={logo} /></a>
          <Right>
            <Collapse>
              <Menu>
                {menus.map(menu => (
                  <Item key={menu.name}>
                    <a href={menu.href}>{menu.name}</a>
                  </Item>
                ))}
              </Menu>
              <Button>GET TICKET</Button>
            </Collapse>
            {/* <OnSmall>
              <Hamburger />
            </OnSmall> */}
          </Right>
        </Nav>
      </Wrapper>
    )
  }
}

export default Navbar
