import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  width: 100%;
  height: auto;
`

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  border: solid 1px #fcb03a;
`

const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 20px;
  font-family: 'Roboto';
  ${'' /* font-weight: bold; */}
  font-style: italic;
  padding: 1em;

  @media (max-width: 780px) {
    font-size: 16px;

  }
  @media (max-width: 580px) {
    font-size: 16px;

  }
`

const Stage = ({ name, src }) => (
  <Card>
    <Image src={src} alt="" />
    <Name>
      {name}
    </Name>
  </Card>
)

export default Stage
