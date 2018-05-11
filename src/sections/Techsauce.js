import React from 'react'
import styled from 'styled-components'

import calendar from '../assets/icons/calendar.svg'
import company from '../assets/icons/company.svg'
import conference from '../assets/icons/conference.svg'
import tag from '../assets/icons/tag.svg'
import ticket from '../assets/icons/ticket.svg'

const Wrapper = styled.div`
  padding: 1em;
  padding-bottom: 60px;
  max-width: 900px;
  margin: auto;
`

const Yellow = styled.span`
  color: #fcb03a;
`

const Title = styled.h1`
  text-align: center;
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

const Techsauce = () => (
  <Wrapper>
    <Title><Yellow>Techsauce</Yellow> คืออะไร?</Title>
    <Detail>
      <p>
        บ๊อบเห่ย ผลไม้มายองเนสแจ๊กเก็ตสตรอว์เบอร์รี รายชื่อควิก พงษ์เซอร์คูลเลอร์รูบิก เยลลี่ นาฏยศาลา แจ็กพ็อตแบนเนอร์ล้มเหลวดีมานด์สแควร์ ดีกรีไวกิ้งเกรย์โลโก้พาสเจอร์ไรส์ หลวงปู่ วอลนัตจ๊าบเฟิร์มมั้ยชาร์ต คอลเล็กชั่นฮากกาบลอนด์มาม่าคอนแท็ค อุปัทวเหตุทับซ้อนฟรังก์คอลัมนิสต์ฟิวเจอร์ ยะเยือก ฮาลาลไวอะกร้าโซนี่ สารขัณฑ์ไฟลต์หลวงปู่ปัจเจกชน เวอร์ซิตี้จิ๊กวาริชศาสตร์เต๊ะ
      </p>
      <p>
        ซาฟารีสเปคสตีล แอร์เทรดอิสรชนรีไซเคิลดีพาร์ตเมนท์ เทรลเล่อร์คอมเมนท์เวิร์ก โอเปอเรเตอร์ คอลเล็กชั่นตัวตน โปรเจกต์ ออโต้เตี๊ยมอุตสาหการจิตเภท สลัมมิลค์ ใช้งาน แคร์แอโรบิค﻿กรรมาชนแบตฮันนีมูน กู๋เทอร์โบคันยิ แม่ค้าเซอร์ตรวจทานแจ็กเก็ตอุปนายิกา คอนเซ็ปต์แดนเซอร์เทรนด์ สไตรค์โกะถ่ายทำราสเบอร์รีเฮอร์ริเคน มาม่าเอ๋เย้วฟลุก ต้าอ่วยอัลมอนด์เอเซียเทวาธิราชอุปัทวเหตุ
      </p>
    </Detail>
    <Infographic>
      <Point>
        <Icon src={company} alt=""/>
        <Yellow><Text>Startup และ บริษัทชั้นนำ 200+ บูท</Text></Yellow>
      </Point>
      <Point>
        <Icon src={conference} alt=""/>
        <Yellow><Text>Speaker จากทั่วโลกกว่า 200 คน</Text></Yellow>
      </Point>
      <Point>
        <Icon src={ticket} alt=""/>
        <Yellow><Text>บัตรเริ่มต้นที่ราคา 4,800 บาท</Text></Yellow>
      </Point>
      <Point>
        <Icon src={tag} alt=""/>
        <Yellow><Text>สิทธิพิเศษสำหรับ Nisit Generation 800 บาท</Text></Yellow>
      </Point>
    </Infographic>
  </Wrapper>
)

export default Techsauce
