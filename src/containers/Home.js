import React from 'react'
import { Element } from 'react-scroll'
import Hero from '../sections/Hero'
import Info from '../sections/Info'
import Timeline from '../sections/Timeline'
import SpeakerList from '../sections/SpeakerList'
import Stages from '../sections/Stages'
import Price from '../sections/Price'
import Map from '../sections/Map'
import NisitGeneration from '../sections/NisitGeneration'
import Footer from '../sections/Footer'
import Techsauce from '../sections/Techsauce'
import Contact from '../sections/Contact'

export default () => (
  <div>
    <Element name="hero">
      <Hero />
    </Element>
    <Element name="techsauce">
      <Techsauce />
      <Map />
    </Element>
    {/* <Info /> */}
    {/* <SpeakerList /> */}
    <Element name="ticket">
      <Price />
    </Element>
    <Element name="timeline">
      <Timeline />
    </Element>
    <Element style={{
      background: 'linear-gradient(to bottom, #111111, #202020)',
    }} name="nisit">
      <NisitGeneration />
      <Contact />
      <Footer />
    </Element>
    {/* <Stages /> */}
  </div>
)
