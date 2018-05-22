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
    <Title><Yellow>Nisit Generation</Yellow> คืออะไร?</Title>
    <hr/>
    <Detail>
      {/* <p>
        บ๊อบเห่ย ผลไม้มายองเนสแจ๊กเก็ตสตรอว์เบอร์รี รายชื่อควิก พงษ์เซอร์คูลเลอร์รูบิก เยลลี่ นาฏยศาลา แจ็กพ็อตแบนเนอร์ล้มเหลวดีมานด์สแควร์ ดีกรีไวกิ้งเกรย์โลโก้พาสเจอร์ไรส์ หลวงปู่ วอลนัตจ๊าบเฟิร์มมั้ยชาร์ต คอลเล็กชั่นฮากกาบลอนด์มาม่าคอนแท็ค อุปัทวเหตุทับซ้อนฟรังก์คอลัมนิสต์ฟิวเจอร์ ยะเยือก ฮาลาลไวอะกร้าโซนี่ สารขัณฑ์ไฟลต์หลวงปู่ปัจเจกชน เวอร์ซิตี้จิ๊กวาริชศาสตร์เต๊ะ
      </p>
      <p>
        ซาฟารีสเปคสตีล แอร์เทรดอิสรชนรีไซเคิลดีพาร์ตเมนท์ เทรลเล่อร์คอมเมนท์เวิร์ก โอเปอเรเตอร์ คอลเล็กชั่นตัวตน โปรเจกต์ ออโต้เตี๊ยมอุตสาหการจิตเภท สลัมมิลค์ ใช้งาน แคร์แอโรบิค﻿กรรมาชนแบตฮันนีมูน กู๋เทอร์โบคันยิ แม่ค้าเซอร์ตรวจทานแจ็กเก็ตอุปนายิกา คอนเซ็ปต์แดนเซอร์เทรนด์ สไตรค์โกะถ่ายทำราสเบอร์รีเฮอร์ริเคน มาม่าเอ๋เย้วฟลุก ต้าอ่วยอัลมอนด์เอเซียเทวาธิราชอุปัทวเหตุ
      </p> */}
      {/* <p>
        <b>Nisit Generation</b> เรามีเป้าหมายว่าจะทำให้ชีวิตนักศึกษาดีขึ้น
      </p>
      <p>
        พวกเรารวมตัวกันระหว่างเพื่อน ๆ หลากมหาวิทยาลัย เพื่อสร้างพื้นที่ในการแบ่งปัน
        ไม่ว่าจะเป็นโปรโมชั่น กิจกรรม และ ข่าวสารต่าง ๆ ที่เป็นประโยชน์ต่อเพื่อน ๆ
      </p>
      <p>
        พวกเราจะร่วมมือกับทั้งภาครัฐ และ ภาคเอกชน
        เพื่อผลักดันศักยภาพของนิสิต นักศึกษา
      </p> */}
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
