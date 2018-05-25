import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import background from '../assets/homebg5.jpg'

import promotion from '../assets/icons/promotion.svg'
import book from '../assets/icons/book.svg'
import bike from '../assets/icons/bike.svg'
import interview from '../assets/icons/interview.svg'

const Wrapper = styled.div`
  padding: 1em;
  max-width: 900px;
  margin: auto;
`

const Yellow = styled.span`
  color: #fcb03a;
`

const Title = styled.h1`
  ${'' /* text-align: center; */}
  margin: 0;
`

const Detail = styled.div`
  font-family: sans-serif;
`

const Icon = styled.img`
  max-width: 80px;
  margin-bottom: .5em;
`

const Point = styled.div`
  text-align: center;
  padding: 1em;
`

const Text = styled.div`
  font-size: 20px;
`

const Infographic = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 2em;
  @media (max-width: 780px) {
    ${Text} {
      font-size: 18px;
    }
  }
  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;
    ${Text} {
      font-size: 16px;
    }
    ${Point} {
      padding: 0;
    }
  }
`

const NisitGeneration = () => (
  <Wrapper>
    <Title><Yellow>Nisit Generation</Yellow> <span style={{ whiteSpace: 'nowrap' }}>คืออะไร?</span></Title>
    <hr/>
    <Detail>
      <p>
        เราคือเว็บไซต์ Community ของนิสิตนักศึกษามหาวิทยาลัยโดยเราจะนำเสนอคอนเทนต์คุณภาพเพื่อสร้างโอกาสให้แก่นิสิตนักศึกษา ดังนี้
      </p>
      <p style={{ lineHeight: '30px' }}>
        1. <b>Promotion</b> เรานำเสนอโปรโมชั่นพิเศษจากแบรนด์ต่างๆสำหรับนิสิตนักศึกษา<br/>
        2. <b>Activity</b> กิจกรรมพิเศษๆ สำหรับนิสิตนักศึกษา<br />
        3. <b>Job Opportunity</b> โอกาสในการหางานและฝึกงานของนิสิตกับบริษัทต่างๆ<br />
        4. <b>Education</b> คอนเทนต์สำหรับการพัฒนาด้านการศึกษาเพื่อให้นิสิตได้มีความเข้าใจและแรงบันดาลใจเพิ่มมากขึ้น
      </p>
    </Detail>
    <Infographic>
      <Point>
        <Icon src={promotion} alt="" />
        <Yellow><Text>Promotion</Text></Yellow>
      </Point>
      <Point>
        <Icon src={bike} alt="" />
        <Yellow><Text>Activity</Text></Yellow>
      </Point>
      <Point>
        <Icon src={interview} alt="" />
        <Yellow><Text>Job Opportunity</Text></Yellow>
      </Point>
      <Point>
        <Icon src={book} alt="" />
        <Yellow><Text>Education</Text></Yellow>
      </Point>
    </Infographic>

  </Wrapper>
)

export default NisitGeneration
