import React from 'react'
import styled from 'styled-components'

import background from '../assets/homebg2.jpg'
import tsLogo from '../assets/ts-logo-sq.png'
import ngLogo from '../assets/ng-logo.png'

const Full = styled.div`
  background-image:
    linear-gradient(to bottom,
      rgba(17, 17, 17, 1) 0%,
      rgba(17, 17, 17, 0) 10%,
      rgba(17, 17, 17, 0) 90%,
      rgba(17, 17, 17, 1) 100%
    ),
    linear-gradient(to right,
      rgba(17, 17, 17, 1) 0%,
      rgba(17, 17, 17, 0) 10%,
      rgba(17, 17, 17, 0) 90%,
      rgba(17, 17, 17, 1) 100%
    ),
    url(${background});
  background-repeat: no-repeat;
  background-position: center;
  box-sizing: border-box;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2em;
  padding-top: 3em;
`

const Logo = styled.img`
  max-width: 200px;
  width: 100%;
  transition: all 300ms;

  @media (max-width: 780px) {
    max-width: 200px;
    width: 100%;
  }

  @media (max-width: 480px) {
    max-width: 120px;
    width: 100%;
  }
`

const Company = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;

  @media (max-width: 780px) {
    flex-direction: column;
  }
`

const X = styled.span`
  color: white;
  font-size: 50px;
  padding: 0 1em 10px 1em;
`

const Detail = styled.div`
  text-align: center;
`

const Special = styled.h3`
  color: #fcb03a;
`

const Hero = () => (
  <Full>
    <Company>
      <Logo src={tsLogo} />
      <X>&times;</X>
      <Logo src={ngLogo} />
    </Company>
    <Detail>
      <h1>JUNE 22 - 23, 2018</h1>
      <h2>CENTARA GRAND AT CENTRAL WORLD</h2>
      {/* <h1><del>4800</del> 800</h1> */}
      <Special>STUDENT PRICE BY NISIT GENERATION</Special>
    </Detail>
  </Full>
)
export default Hero
