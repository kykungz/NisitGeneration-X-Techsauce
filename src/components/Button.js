import React from 'react'
import styled from 'styled-components'

const Yellow = styled.button`
  background-color: #fcb03a;
  color: black;
  font-size: 1em;
  font-weight: bold;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 300ms;
  padding: 1em;

  &:hover {
    filter: brightness(.8);
  }
`

const Button = ({ onClick, children }) => (
  <Yellow onClick={onClick}>{ children }</Yellow>
)

export default Button
