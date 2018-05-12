import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import 'hamburgers/dist/hamburgers.min.css'

injectGlobal`
  .hamburger-inner, .hamburger-inner:after, .hamburger-inner:before {
    background: white !important;
    border: 0 !important;
  }
`

const White = styled.span`
  background: white !important;
  border: solid white thin;
`

const Button = styled.button`
  border: none;
  outline: none;
`

const Hamburger = props => (
  <Button {...props} className="hamburger hamburger--collapse" type="button">
    <span className="hamburger-box">
      <White className="hamburger-inner" />
    </span>
  </Button>
)

export default Hamburger
