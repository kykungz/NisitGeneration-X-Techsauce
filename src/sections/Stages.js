import React from 'react'
import styled from 'styled-components'
import Stage from '../components/Stage'
import stages from '../data/stages'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;
  max-width: 900px;
  grid-gap: 1em;
  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`

const Wrapper = styled.div`
  padding: 1em;
  ${'' /* box-sizing:content-box; */}
`

const Stages = () => (
  <Wrapper>
    <h1 style={{ textAlign: 'center' }}><i>Stages</i></h1>
    <Grid>
      {stages.map((stage, i) => (
        <Stage key={i} src={`https://summit.techsauce.co/wp-content/uploads/2018/02/stage${i+1}.jpg`} name={stage} />
      ))}
    </Grid>
  </Wrapper>
)

export default Stages
