import React from 'react'
import styled from 'styled-components'
import 'hamburgers/dist/hamburgers.min.css'

const White = styled.span`
  color: white !important;
`

const Hamburger = () => (
  <button className="hamburger hamburger--collapse" type="button">
    <span className="hamburger-box">
      <White className="hamburger-inner" />
    </span>
  </button>
)

export default Hamburger
