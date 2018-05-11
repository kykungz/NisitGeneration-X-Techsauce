import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

const Yellow = styled.button`
  background-color: #fcb03a;
  color: black;
  font-size: 1em;
  font-weight: bold;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 300ms;
  padding: ${props => props.padding || '.5em'};

  &:hover {
    filter: brightness(.8);
    transform: scale(0.95);
  }
`

const Button = ({ padding, onClick, children }) => (
  <Yellow padding={padding} onClick={onClick}>{ children }</Yellow>
)

export default Button
