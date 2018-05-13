import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
`

const Center = styled.div`
  margin: auto;
  text-align: center;
  max-width: 900px;
  overflow: hidden;
`

const Facebook = styled.div`
  border: none;
  border-radius: 10px;
  @media (max-width: 480px) {
    border-radius: 0;
  }
`

const Contact = () => (
  <Center>
    <Title>ติดตามพวกเราได้ที่</Title>
    <Facebook
      className="fb-page"
      data-href="https://www.facebook.com/NisitGeneration/"
      data-tabs="timeline"
      data-width="600"
      data-height="500"
      data-small-header="false"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="true">
      <blockquote cite="https://www.facebook.com/NisitGeneration/" className="fb-xfbml-parse-ignore">
        <h2><a href="https://www.facebook.com/NisitGeneration/">NisitGeneration</a></h2>
      </blockquote>
    </Facebook>
  </Center>
)

export default Contact
