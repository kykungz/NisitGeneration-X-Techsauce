import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  width: 100%;  border-radius: 4px;

`

const Name = styled.h3`
  margin-bottom: .5em;
  margin-top: .5em;
`

const Position = styled.div`
  color: #fcb03a;
  font-size: 14px;
`

const Card = styled.div`
  border-radius: 6px;
`

const Speaker = ({ name, position, src }) => (
  <Card>
    <Image src={src} alt="" />
    <Name>{name}</Name>
    <Position>{position}</Position>
  </Card>
)

export default Speaker
