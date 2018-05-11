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

const Text = styled.h4`
  text-align: center;
  margin: 0;
  line-height: 2rem;
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
          <Text>Registeration</Text>
          <Text>NOW &mdash; JUNE 8</Text>
        </Detail>
      </Content>
      <Content>
        <Circle />
        <Detail>
          <Text>Announcement</Text>
          <Text>JUNE 10</Text>
        </Detail>
      </Content>
      <Content>
        <Circle />
        <Detail>
          <Text>Transfer Fee</Text>
          <Text>JUNE 15</Text>
        </Detail>
      </Content>
    </List>
  </Center>
)

export default Timeline
