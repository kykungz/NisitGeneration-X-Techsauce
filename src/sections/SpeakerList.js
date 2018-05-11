import React from 'react'
import styled from 'styled-components'
import Speaker from '../components/Speaker'
import speakers from '../data/speakers'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 1em;
  padding: 1em;
  max-width: 900px;
  margin: auto;
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Title = styled.h1`
  text-align: center;
  padding-bottom: 1.5em;
`

const SpeakerList = () => (
  <div>
    <Title><i>MEET OUR 2018 SPEAKERS</i></Title>
    <Grid>
      {speakers.map((speaker, i) => (
        <Speaker
          key={i}
          name={speaker.name}
          position={speaker.position}
          src={speaker.src}
        />
      ))}
    </Grid>
  </div>
)

export default SpeakerList
