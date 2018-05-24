import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'


import background from '../assets/homebg5.jpg'

const Wrapper = styled.div`
  ${'' /* background-image:
    linear-gradient(to bottom,
      rgba(17, 17, 17, 1) 0%,
      rgba(17, 17, 17, 0.1) 20%,
      rgba(17, 17, 17, 0.1) 80%,
      rgba(17, 17, 17, 1) 100%
      ),
    url(${background});
  background-repeat: no-repeat;
  background-position: center;
  padding-bottom: 40px; */}
`

const Content = styled.div`
  max-width: 900px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
  padding: 1em;
  margin-bottom: 60px;
  @media (max-width: 780px) {
    text-align: left;
    grid-template-columns: 1fr;
    padding: 0;
  }
`

const Location = styled.iframe`
  border: 0;
  border-radius: 6px;
  @media (max-width: 780px) {
    border-radius: 0;
  }
`
const Map = () => (
  <Wrapper>
    <Content>
      <div>
        <h2 style={{ textAlign: 'center', fontWeight: 'lighter' }}>
          Centara Grand at Central World
        </h2>
        <Location
          title="Centara Grand at Central World"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5161693171212!2d100.53655831466236!3d13.747716990350138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2992f7809567f%3A0xccc050cff0e7d234!2sCentara+Grand+at+CentralWorld!5e0!3m2!1sth!2sth!4v1527187705162"
          width="100%"
          height="350"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </Content>
  </Wrapper>
)
export default Map
