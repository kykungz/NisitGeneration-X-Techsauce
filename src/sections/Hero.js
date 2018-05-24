import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

import background from '../assets/homebg2.jpg'
import tsLogo from '../assets/ts-logo-sq.png'
import ngLogo from '../assets/ng-logo.png'
import Button from '../components/Button'

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
  background-size: cover;
  box-sizing: border-box;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 160px 1em;
  @media (max-width: 480px) {
    padding: 120px 1em;
  }
`

const Logo = styled.img`
  max-width: 200px;
  width: 100%;
  transition: all 300ms;

  @media (max-width: 780px) {
    max-width: 180px;
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
`

const X = styled.span`
  color: white;
  font-size: 50px;
  padding: 0 1em 10px 1em;
  font-family: sans-serif;
  @media (max-width: 780px) {
    padding: 0 .5em 10px .5em;
    font-size: 40px;
  }
`

const Detail = styled.div`
  text-align: center;
`

const Special = styled.span`
  font-size: 28px;
  font-family: 'Kanit', sans-serif;
  color: #fcb03a;
`

const Place = styled.h2`
  margin-top: 0;
  @media (max-width: 480px) {
    padding: 0 .5em 10px .5em;
    font-size: 20px;
  }
`

const Date = styled.h1`
  @media (max-width: 480px) {
    padding: 0 .5em 10px .5em;
    font-size: 30px;
  }
`

const Hero = () => (
  <Full>
    <Company>
      <Logo src={tsLogo} />
      <X>&times;</X>
      <Logo src={ngLogo} />
    </Company>
    <Detail>
      <Date>22 - 23 มิถุนายน 2018</Date>
      <Place>CENTARA GRAND AT CENTRAL WORLD</Place>
      <Link to="ticket" spy smooth offset={-100} duration={500}>
        <Button padding=".5em 1.5em" outline>
          <Special>สมัครเลย!!</Special>
        </Button>
      </Link>
    </Detail>
  </Full>
)
export default Hero
