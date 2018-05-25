import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import tsLogo from '../assets/icons/ts.png'
// import tsLogo from '../assets/ts-logo-sq.png'

import background from '../assets/homebg5.jpg'

const Background = styled.div`
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
  background-size: cover;
`

const Wrapper = styled.div`
  max-width: 900px;
  margin: auto;
  display: grid;
  grid-template-areas: 'a b';
  grid-gap: 1em;
  padding: 1em;
  margin-bottom: 60px;

  @media (max-width: 800px) {
    grid-template-areas: 'b' 'a';
    grid-gap: 2em;
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
  @media (max-width: 480px) {
    font-size: 26px;
    margin-bottom: -10px;
  }
`

const Promotion = styled.h1`
  margin: 0;
  font-size: 60px;
  font-style: italic;
  @media (max-width: 480px) {
    font-size: 46px;
  }
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

const Title = styled.h1`
  text-align: center;
  font-style: italic;
`
const OldPrice = () => (
  <Background>
    <Title>EVENT</Title>
    <Wrapper>
      <Map>
        <iframe
          title="Centara Grand at Central World"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5161693171212!2d100.53655831466236!3d13.747716990350138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2992f7809567f%3A0xccc050cff0e7d234!2sCentara+Grand+at+CentralWorld!5e0!3m2!1sth!2sth!4v1527187705162"
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
          <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSd8-4HRfdEa-ukswwQXULK6gMRL9Ttl8ssAEqkQ0KC5Kg94aQ/viewform?usp=sf_link">
            <Button padding="1em 2em">
              <Buy>
                GET TICKET NOW
              </Buy>
            </Button>
          </a>
        </div>
      </Content>
    </Wrapper>
  </Background>
)
export default OldPrice
