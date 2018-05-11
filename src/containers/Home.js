import React from 'react'
// import styled from 'styled-components'
import Hero from '../sections/Hero'
import Info from '../sections/Info'
import Timeline from '../sections/Timeline'
import SpeakerList from '../sections/SpeakerList'
import Stages from '../sections/Stages'
import Price from '../sections/Price'
import Map from '../sections/Map'

import Techsauce from '../sections/Techsauce'

export default () => (
  <div>
    <Hero />
    <Techsauce />
    {/* <Info /> */}
    <Map />
    {/* <SpeakerList /> */}
    <Price />
    <Timeline />
    {/* <Stages /> */}
  </div>
)
