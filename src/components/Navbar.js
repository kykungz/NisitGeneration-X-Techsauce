import React from 'react'
import styled from 'styled-components'
import Button from './Button'

import logo from '../assets/ng-logo.png'

const Wrapper = styled.div`
  margin: auto;
  position: fixed;
  width: 100%;
`

const Nav = styled.nav`
  max-width: 1000px;
  display: flex;
  box-sizing: border-box;
  top: 0;
  left: 0;
  padding: 1em;
  justify-content: center;
  align-items: center;
  margin: auto;
  background-color: rgb(0,0,0,0);
`

const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-align: right;
  margin-left: auto;
`

const Item = styled.li`
  float: left;

  a {
    display: block;
    padding: 1em 1em;
    margin: 0 .25em;
    font-weight: 500;
    color: white;
    text-decoration: none;
    transition: all 200ms;
  }

  &:last-child {
    margin-right: .5em;
  }

  a:hover {
    border-radius: 20px;
    background: hsla(0, 0%, 100%, 0.1);
  }
`

const Brand = styled.img`
  height: 60px;
`

const menus = [
  { name: 'HOME', href: '/home' },
  { name: 'TIMELINE', href: '/news' },
  { name: 'SPEAKERS', href: '/contact' },
  { name: 'STAGES', href: '/about' },
  { name: 'ABOUT US', href: '/about' },
]

const Navbar = () => (
  <Wrapper>
    <Nav>
      <a href="/"><Brand src={logo} /></a>
      <Menu>
        {menus.map(menu => (
          <Item key={menu.name}>
            <a href={menu.href}>{menu.name}</a>
          </Item>
        ))}
      </Menu>
      <Button style={{ height: '60px' }}>GET TICKET</Button>
    </Nav>
  </Wrapper>
)

export default Navbar
