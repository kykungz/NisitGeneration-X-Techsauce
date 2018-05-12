import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Link } from 'react-scroll'
import logo from '../assets/ng-logo.png'
import menus from '../data/menus'
import HamburgerButton from './Hamburger'

injectGlobal`
  .highlight {
    background: rgba(0,0,0,0.6) !important;
  }
`

const Wrapper = styled.div.attrs({
  id: 'navbar',
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
  align-items: center;
  margin: auto;
`

const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-align: right;
`

const Item = styled.li`
  float: left;
  cursor: pointer;

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
  padding: .5em 1em;
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
  @media (max-width: 800px) {
    display: none;
  }
`

const Hamburger = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: block;
  }
`

class Navbar extends Component {
  componentDidMount () {
    console.log('mounted')
    const alterNavbar = () => {
      console.log('scrolling')
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
                    <Link to={menu.target} spy smooth offset={menu.offset} duration={500}>
                      {menu.name}
                    </Link>
                  </Item>
                ))}
              </Menu>
            </Collapse>
            <Hamburger>
              <HamburgerButton onClick={this.props.onHamburgerClick} />
            </Hamburger>
          </Right>
        </Nav>
      </Wrapper>
    )
  }
}

export default Navbar
