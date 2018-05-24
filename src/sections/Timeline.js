import React from 'react'
import styled from 'styled-components'
import background from '../assets/homebg3.jpg'

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

const Circle = styled.div`
  border-radius: 50%;
  background: white;
  width: 120px;
  height: 120px;
  margin: 0 80px;
`

const Detail = styled.div`
  margin-top: 1em;
`

const Timeline = () => (
  <Center>
    {/* <div style={{ paddingTop: '120px' }}> */}
      <h1><i>TIMELINE</i></h1>
    {/* </div> */}
    <List>
      <Content>
        <Circle />
        <Detail>
          <Text>กรอกใบสมัคร</Text>
          <Text>วันนี้ &mdash; 8 มิถุนายน 2561</Text>
        </Detail>
      </Content>
      <Content>
        <Circle />
        <Detail>
          <Text>ประกาศผู้มีสิทธิเข้าร่วมงาน</Text>
          <Text>10 มิถุนายน 2561</Text>
        </Detail>
      </Content>
      <Content>
        <Circle />
        <Detail>
          <Text>ชำระเงินค่าเข้าร่วม</Text>
          <Text>ภายใน 15 มิถุนายน 2561</Text>
        </Detail>
      </Content>
    </List>
  </Center>
)

export default Timeline
