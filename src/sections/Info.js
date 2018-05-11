import React from 'react'
import styled from 'styled-components'

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Content = styled.div`
  padding: 1em;
  padding-top: 0;
  display: flex;
  justify-content: center;
  max-width: 900px;
  @media (max-width: 780px) {
    flex-direction: column;
  }
`

const Image = styled.img`
  width: 100%;
`

const Block = styled.div`
  flex: 1 1 0;
  & + & {
    margin-left: 1.5rem;
  }
  @media (max-width: 780px) {
    & + & {
      margin-left: 0;
    }
  }
`

const Text = styled.p`
  font-size: 18px;
  margin: 0;
  & + & {
    margin-top: 1rem;
  }
`

const External = styled.a`
  text-decoration: none;
`

const LinkText = styled.h3`
  border: thin solid #fcb03a;
  padding: .5rem;
  transition: all 300ms;
  &:hover {
    background-color: #fcb03a;
  }
`

const Title = styled.div`
  padding: 1em;
  text-align: center;
`

const Info = () => (
  <Center>
    <Title>
      <h1><i>Welcome the future!</i></h1>
    </Title>
    <Content>
      <Block>
        <Image target="_blank" src="https://summit.techsauce.co/wp-content/uploads/2017/10/image_1-1.jpg" alt="" />
        <External href="https://summit.techsauce.co">
          <LinkText style={{ textAlign: 'center' }}>SEE OFFICIAL WEBSITE</LinkText>
        </External>
      </Block>
      <Block>
        <Text>
          We are back and bigger than ever with the Second year of the Global Tech
          conference in South East Asia, kicking off from the 22-23 of June 2018
          at the Bangkok Centara Grand Hotel.  Since 2012, we have grown exponentially,
          year after year.
        </Text>
        <Text>
          2018 will be no exception with a focus on deep-tech startups and technology
          with world-class speakers including international & Thai startups. Join over
          10,000 global startups, venture capitalists, angel investors, large corporations,
          and tech enthusiast from around the world. Gain insight, different perspectives,
          connect and enjoy this immensely eye-opening collaborative and cohesive conference,
          bringing the best of the best from the industry in one space to discuss future
          nurturers and development of business technologies
        </Text>
      </Block>
    </Content>
  </Center>
)
export default Info
