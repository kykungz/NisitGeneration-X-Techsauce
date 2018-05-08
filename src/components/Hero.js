import React from 'react'
import styled from 'styled-components'

import background from '../assets/homebg2.jpg'
import tsLogo from '../assets/ts-logo-sq.png'
import ngLogo from '../assets/ng-logo.png'


const Full = styled.div`
  background: url(${background}) center no-repeat;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img`
  max-width: 200px;
  width: 100%;
`

const Company = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
`

const X = styled.span`
  color: white;
  font-size: 4em;
  padding: 0 1em;
`

const Hero = () => (
  <Full>
    <Company>
      <Logo src={tsLogo} />
      <X>&times;</X>
      <Logo src={ngLogo} />
    </Company>
  </Full>
)
export default Hero
