import React from 'react'
import styled from 'styled-components'

import form from '../assets/icons/form.svg'
import announce from '../assets/icons/announce.svg'
import pay from '../assets/icons/pay.svg'
import background from '../assets/homebg3.jpg'

const Yellow = styled.span`
  color: #fcb03a;
`

const Center = styled.div`
  padding: 120px 0;
  background-image:
    linear-gradient(to bottom,
      rgba(17, 17, 17, 1) 0%,
      rgba(17, 17, 17, 0) 20%,
      rgba(17, 17, 17, 0) 80%,
      rgba(17, 17, 17, 1) 100%
    ),
    url(${background});
  background-repeat: no-repeat;
  background-position: center, center -120px;
  ${'' /* background-repeat: no-repeat;
  background-position: center; */}
  background-size: cover;
  display: block;
  text-align: center;
`

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`

const Text = styled.h3`
  text-align: center;
  margin: 0;
  line-height: 2rem;
  ${'' /* font-family: sans-serif; */}
  font-weight: normal
`

const Content = styled.div`
  margin-top: 2em;
`

const Circle = styled.img`
  max-width: 80px;
  max-height: 80px;
  margin: 0 80px;
`

const Detail = styled.div`
  margin-top: 1em;
`

const Timeline = () => (
  <Center>
    <h1><i>TIMELINE</i></h1>
    <List>
      <Content>
        <Circle src={form} />
        <Detail>
          <Text><Yellow>กรอกใบสมัคร</Yellow></Text>
          <Text>วันนี้ &mdash; 8 มิถุนายน 2561</Text>
        </Detail>
      </Content>
      <Content>
        <Circle src={announce} />
        <Detail>
          <Text><Yellow>ประกาศผู้มีสิทธิเข้าร่วมงาน</Yellow></Text>
          <Text>10 มิถุนายน 2561</Text>
        </Detail>
      </Content>
      <Content>
        <Circle src={pay} />
        <Detail>
          <Text><Yellow>ชำระเงินค่าเข้าร่วม</Yellow></Text>
          <Text>ภายใน 15 มิถุนายน 2561</Text>
        </Detail>
      </Content>
    </List>
  </Center>
)

export default Timeline
