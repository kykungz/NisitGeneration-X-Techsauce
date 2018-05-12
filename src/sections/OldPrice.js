import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'


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
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  padding: 1em;

    @media (max-width: 780px) {
      text-align: left;
      grid-template-columns: 1fr;
    }
`
const Sale = styled.div`
  text-align: right;
  font-style: italic;

  @media (max-width: 780px) {
    text-align: left;
  }
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
  font-size: 70px;
  font-style: italic;
`

const Buy = styled.span`
  font-size: 26px;
  font-style: italic;
`
const OldPrice = () => (
  <Wrapper>
    <div>
      <iframe
        title="Centara Grand at Central World"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.3537359105035!2d100.55768471466315!3d13.81778519030476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29c159e3544e3%3A0x709a5bb981c416ef!2sCentara+Grand+at+Central+Plaza+Ladprao+Bangkok!5e0!3m2!1sth!2sth!4v1526064629883"
        width="100%"
        height="350"
        frameBorder="0"
        style={{ border: '0' }}
        allowFullScreen
      />
    </div>
    <div>
      <p style={{ marginTop: '0' }}>
        น็อค สปอตวานิลารัม โนติสพาวเวอร์ น้องใหม่ มายองเนสแจมมาราธอนแฮมเบอร์เกอร์ นู้ดโหลนแมชีนปัจเจกชน แชมเปญแพลนวโรกาสดีพาร์ทเมนต์ แพ็คชัวร์ ล็อบบี้แรงผลักฮันนีมูน บ๋อยยูโรไมค์แคมเปญ เอ๋อวัจนะ ปูอัด
      </p>
      <Sale>
        <Full><del>4,800 บาท</del></Full>
        <Promotion>800 บาท</Promotion>
      </Sale>
      <div style={{ textAlign: 'right' }}>
        <Button padding="1em 2em">
          <Buy>
            GET TICKET NOW
          </Buy>
        </Button>
      </div>
    </div>
  </Wrapper>
)
export default OldPrice
