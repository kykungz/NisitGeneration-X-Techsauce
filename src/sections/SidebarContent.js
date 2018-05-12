import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import menus from '../data/menus'

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  height: 100%;
  padding: 1em;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Menu = styled.div`
  text-align: center;
  width: 100%;
`

const Line = styled.div`
  margin: 25px 0;
  height: 2px;
  background: #eeeeee;
  background: linear-gradient(to right, rgba(0,0,0,0), #eeeeee, rgba(0,0,0,0));
`

const SidebarContent = ({ handleClick }) => (
  <Wrapper onClick={handleClick}>
    <Menu>
      <Line />
      {menus.map((menu, i) => (
        <h2 key={i} style={{ cursor: 'pointer' }}>
          <Link
            onClick={handleClick}
            to={menu.target}
            spy
            smooth
            offset={menu.offset}
            duration={500}
          >
            {menu.name}
          </Link>
        </h2>
      ))}
      <Line />
    </Menu>
  </Wrapper>
)

export default SidebarContent
