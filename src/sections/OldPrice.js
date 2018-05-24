import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import tsLogo from '../assets/icons/ts.png'
// import tsLogo from '../assets/ts-logo-sq.png'

import background from '../assets/homebg5.jpg'

const Wrapper = styled.div`
  background-image:
    linear-gradient(to bottom,
      rgba(17, 17, 17, 1) 0%,
      rgba(17, 17, 17, 0.1) 20%,
      rgba(17, 17, 17, 0.1) 80%,
      rgba(17, 17, 17, 1) 100%
    ),
    linear-gradient(to right,
      rgba(17, 17, 17, 1) 0%,
      rgba(17, 17, 17, 0.1) 20%,
      rgba(17, 17, 17, 0.1) 80%,
      rgba(17, 17, 17, 1) 100%
    ),
    url(${background});
  background-repeat: no-repeat;
  background-position: center;
  max-width: 900px;
  margin: auto;
  display: grid;
  grid-template-areas: 'a b';
  grid-gap: 1em;
  padding: 1em;
  margin-top: 40px;

  @media (max-width: 800px) {
    grid-template-areas: 'b' 'a';
  }
`

const Map = styled.div`
  grid-area: a;
`

const Content = styled.div`
  grid-area: b;
`

const Sale = styled.div`
  text-align: center;
  font-style: italic;
`

const Full = styled.h3`
  margin: 0;
  font-size: 40px;
  color: #fcb03a;
  font-weight: normal;
  margin-bottom: -20px;
`

const Promotion = styled.h1`
  margin: 0;
  font-size: 60px;
  font-style: italic;
`

const Buy = styled.span`
  font-size: 26px;
  font-style: italic;
`
const Logo = styled.img`
  max-width: 300px;
  width: 100%;
  text-align: center;
  margin: auto;
  transition: all 300ms;
`

const OldPrice = () => (
  <Wrapper>
    <Map>
      <iframe
        title="Centara Grand at Central World"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.3537359105035!2d100.55768471466315!3d13.81778519030476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29c159e3544e3%3A0x709a5bb981c416ef!2sCentara+Grand+at+Central+Plaza+Ladprao+Bangkok!5e0!3m2!1sth!2sth!4v1526064629883"
        width="100%"
        height="350"
        frameBorder="0"
        style={{ border: '0', borderRadius: '6px' }}
        allowFullScreen
      />
    </Map>
    <Content>
      {/* <p style={{ color:'white', marginTop: '0', textAlign: 'center' }}>
        Techsauce Global Summit 2018<br />
        22 - 23 มิ.ย. 2561<br />
        ณ Centara Grand at Central World
      </p> */}
      <div style={{ textAlign: 'center' }}>
        <Logo src={tsLogo} />
      </div>
      <Sale>
        <Full>Standard <del>4,800 บาท</del></Full>
        <Promotion><font size='6'>นักศึกษา</font> 800 <font size='6'>บาท</font></Promotion>
        <div style={{ fontSize: '16px', color: 'white', marginTop: '-6px', paddingBottom: '1em' }}>
          *จำนวนจำกัดเพียง 100 ใบ
        </div>
      </Sale>
      <div style={{ textAlign: 'center' }}>
        <Button padding="1em 2em">
          <Buy>
            GET TICKET NOW
          </Buy>
        </Button>
      </div>
    </Content>
  </Wrapper>
)
export default OldPrice
