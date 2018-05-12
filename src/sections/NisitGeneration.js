import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import background from '../assets/homebg5.jpg'

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

const NisitGeneration = () => (
  <Wrapper>
    <Title><Yellow>Nisit Generation</Yellow> คืออะไร?</Title>
    <hr/>
    <Detail>
      <p>
        บ๊อบเห่ย ผลไม้มายองเนสแจ๊กเก็ตสตรอว์เบอร์รี รายชื่อควิก พงษ์เซอร์คูลเลอร์รูบิก เยลลี่ นาฏยศาลา แจ็กพ็อตแบนเนอร์ล้มเหลวดีมานด์สแควร์ ดีกรีไวกิ้งเกรย์โลโก้พาสเจอร์ไรส์ หลวงปู่ วอลนัตจ๊าบเฟิร์มมั้ยชาร์ต คอลเล็กชั่นฮากกาบลอนด์มาม่าคอนแท็ค อุปัทวเหตุทับซ้อนฟรังก์คอลัมนิสต์ฟิวเจอร์ ยะเยือก ฮาลาลไวอะกร้าโซนี่ สารขัณฑ์ไฟลต์หลวงปู่ปัจเจกชน เวอร์ซิตี้จิ๊กวาริชศาสตร์เต๊ะ
      </p>
      <p>
        ซาฟารีสเปคสตีล แอร์เทรดอิสรชนรีไซเคิลดีพาร์ตเมนท์ เทรลเล่อร์คอมเมนท์เวิร์ก โอเปอเรเตอร์ คอลเล็กชั่นตัวตน โปรเจกต์ ออโต้เตี๊ยมอุตสาหการจิตเภท สลัมมิลค์ ใช้งาน แคร์แอโรบิค﻿กรรมาชนแบตฮันนีมูน กู๋เทอร์โบคันยิ แม่ค้าเซอร์ตรวจทานแจ็กเก็ตอุปนายิกา คอนเซ็ปต์แดนเซอร์เทรนด์ สไตรค์โกะถ่ายทำราสเบอร์รีเฮอร์ริเคน มาม่าเอ๋เย้วฟลุก ต้าอ่วยอัลมอนด์เอเซียเทวาธิราชอุปัทวเหตุ
      </p>
    </Detail>
  </Wrapper>
)
export default NisitGeneration
