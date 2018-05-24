import React from 'react'
import styled from 'styled-components'

const Yellow = styled.button`
  background-color: ${props => !props.outline ? '#fcb03a' : 'rgba(0,0,0,0.5)'};
  border: ${props => props.outline ? 'thin solid #fcb03a' : 'none'};
  color: black;
  font-size: 1em;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  transition: all 300ms;
  padding: ${props => props.padding || '.5em'};
  border-radius: 6px;

  &:hover {
    filter: brightness(.8);
    transform: scale(0.95);
  }
`

const Button = props => {
  const {
    outline,
    padding,
    onClick,
    children,
  } = props
  return (
    <Yellow outline={outline} padding={padding} onClick={onClick}>
      { children }
    </Yellow>
  )
}

export default Button
