import React from 'react'
import styled from 'styled-components'

import calendar from '../assets/icons/calendar.svg'
import company from '../assets/icons/company.svg'
import conference from '../assets/icons/conference.svg'
import tag from '../assets/icons/tag.svg'
import ticket from '../assets/icons/ticket.svg'

const Wrapper = styled.div`
  padding: 1em;
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
    <Title><Yellow>Techsauce Global Summit</Yellow> คืออะไร?</Title>
    <Detail>
      {/* <p>
        บ๊อบเห่ย ผลไม้มายองเนสแจ๊กเก็ตสตรอว์เบอร์รี รายชื่อควิก พงษ์เซอร์คูลเลอร์รูบิก เยลลี่ นาฏยศาลา แจ็กพ็อตแบนเนอร์ล้มเหลวดีมานด์สแควร์ ดีกรีไวกิ้งเกรย์โลโก้พาสเจอร์ไรส์ หลวงปู่ วอลนัตจ๊าบเฟิร์มมั้ยชาร์ต คอลเล็กชั่นฮากกาบลอนด์มาม่าคอนแท็ค อุปัทวเหตุทับซ้อนฟรังก์คอลัมนิสต์ฟิวเจอร์ ยะเยือก ฮาลาลไวอะกร้าโซนี่ สารขัณฑ์ไฟลต์หลวงปู่ปัจเจกชน เวอร์ซิตี้จิ๊กวาริชศาสตร์เต๊ะ
      </p>
      <p>
        ซาฟารีสเปคสตีล แอร์เทรดอิสรชนรีไซเคิลดีพาร์ตเมนท์ เทรลเล่อร์คอมเมนท์เวิร์ก โอเปอเรเตอร์ คอลเล็กชั่นตัวตน โปรเจกต์ ออโต้เตี๊ยมอุตสาหการจิตเภท สลัมมิลค์ ใช้งาน แคร์แอโรบิค﻿กรรมาชนแบตฮันนีมูน กู๋เทอร์โบคันยิ แม่ค้าเซอร์ตรวจทานแจ็กเก็ตอุปนายิกา คอนเซ็ปต์แดนเซอร์เทรนด์ สไตรค์โกะถ่ายทำราสเบอร์รีเฮอร์ริเคน มาม่าเอ๋เย้วฟลุก ต้าอ่วยอัลมอนด์เอเซียเทวาธิราชอุปัทวเหตุ
      </p> */}
      {/* <p>
        ‘The Largest and Sexiest Global Tech Conferences in South East Asia’
      </p>
      <p>
        เป็นการรวมตัวครั้งยิ่งใหญ่ของคนในวงการ Tech ไม่ว่าจะเป็นบริษัทนักลงทุน องค์กรระดับโลก และ Startup จากทั่วโลก
      </p>
      <p>
        Speakers กว่า 200 คน บน 8 เวที ที่จัดเต็มด้วยคุณภาพเน้นๆ ตั้งแต่ CEO และนักลงทุน ไปจนถึง ผู้เชี่ยวชาญสายเทคโนโลยีต่างๆ ที่มาร่วมแชร์ความรู้ ประสบการณ์ และวิธีคิด ทั้ง Brett King, Vitaly M. Golomb จาก HP Tech Ventures, Mike Peng จาก IDEO Tokyo, Kei Shimada จาก Dentsu Japan, Hiroshi Saijo จาก Yamaha Motor Ventures & Laboratory Silicon Valley รวมถึง Roy Teo จาก MAS Singapore และ Alvin Ng จาก GE Capital ซึ่งเป็นเพียงแค่ส่วนหนึ่งเท่านั้น!
      </p>
      <p>
        ทาง Techsauce จัดงานนี้เป็นปีที่ 3<br/>
        จะจัดขึ้นวันที่ 22 - 23 มื.ย.2561<br/>
        ณ Centara Grand and Bangkok Convention Centre, Central world
      </p> */}
      {/* <p>
        ‘The Largest and Sexiest Global Tech Conferences in South East Asia’
      </p>
      <p>
        เป็นการรวมตัวครั้งยิ่งใหญ่ของคนในวงการ Tech ไม่ว่าจะเป็นบริษัทนักลงทุน องค์กรระดับโลก และ Startup จากทั่วโลก
      </p>
      <p>
        Speakers กว่า 200 คน บน 8 เวที ที่จัดเต็มด้วยคุณภาพเน้นๆ ตั้งแต่ CEO และนักลงทุน ไปจนถึง ผู้เชี่ยวชาญสายเทคโนโลยีต่างๆ ที่มาร่วมแชร์ความรู้ ประสบการณ์ และวิธีคิด ทั้ง Brett King, Vitaly M. Golomb จาก HP Tech Ventures, Mike Peng จาก IDEO Tokyo, Kei Shimada จาก Dentsu Japan, Hiroshi Saijo จาก Yamaha Motor Ventures & Laboratory Silicon Valley รวมถึง Roy Teo จาก MAS Singapore และ Alvin Ng จาก GE Capital ซึ่งเป็นเพียงแค่ส่วนหนึ่งเท่านั้น!
      </p>
      <p>
        เป็นงานที่นักศึกษาจะได้เห็นภาพว่าโลกธุรกิจปัจจุบันนั้นเป็นอย่างไร
      </p>
      <p>
        ทาง Techsauce จัดงานนี้เป็นปีที่ 3<br/>
        จะจัดขึ้นวันที่ 22 - 23 มื.ย.2561<br/>
        ณ Centara Grand and Bangkok Convention Centre, Central world
      </p>
      <p>

      </p> */}
      <p>
        Techsauce Global Summit 2018 คือ งานที่จะนำวงการเทคโนโลยีรุ่นใหม่เข้ามาแสดงทั้ง ผู้สร้างเทคโนโลยี ผู้ประกอบการ นักลงทุนต่างๆ และองค์กรระดับโลก ซึ่งทุกท่านที่เข้ามาในงานสามารถเข้าไปพูดคุยกับบูธต่างๆ เช่น Startup และ ธุรกิจ Tech ทั้งในและนอกประเทศ และรับฟังสัมมนาดีๆ มากมายทั้ง 10 เวที เช่น HealthTech, Startup, Venture Capital (VC), Blockchain & Cryptocurrency, Data Science & AI เรียกได้ว่าเป็นงานที่ผู้ประกอบการและผู้ที่สนใจด้านเทคโนโลยีต่างตั้งหน้าตั้งตารอเลยทีเดียว
      </p>
      <p>
        โดยงานจะขึ้นในวันที่ 22 - 23 มิ.ย. 2561<br />
        ณ Centara Grand and Bangkok Convention Centre, Central World
      </p>
      <p>
        ทางทีมงาน Nisit Generation ของเราเห็นว่างานนี้เป็นโอกาสที่ดีสำหรับนิสิตนักศึกษาที่กำลังสนใจใน
        เทคโนโลยี ธุรกิจ ยุคสมัยใหม่ คนที่ได้เข้างานจะได้เป็นการเปิดโลกมองเห็นภาพรวมโลกธุรกิจปัจจุบัน
        บริษัทต่างๆ ทั้งในและต่างประเทศว่าเป็นอย่างไรกันแล้ว
      </p>
      <p>
        ซึ่งทาง Nisit Generation ของเรานั้นได้รับสิทธิพิเศษในการจัดจำหน่ายบัตรนักศึกษาราคา <b><u>800</u></b> บาท​ ที่เดียวในประเทศไทย!
      </p>
      <p>
        อ่านข้อมูลเพิ่มเติมได้ที่: <a style={{ color: '#fcb03a' }} target="_blank" rel="noopener noreferrer" href="https://techsauce.co/events/techsauce-global-summit-2018/">https://techsauce.co/events/techsauce-global-summit-2018/</a>
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
        <Yellow><Text>บัตรทั่วไปเริ่มต้นที่ 4,800 บาท</Text></Yellow>
      </Point>
      <Point>
        <Icon src={tag} alt=""/>
        <Yellow>
          <Text>
            สิทธิพิเศษสำหรับ{' '}
            <span style={{ whiteSpace: 'nowrap' }}>Nisit Generation</span>
            {' '}800 บาท
          </Text>
        </Yellow>
      </Point>
    </Infographic>
  </Wrapper>
)

export default Techsauce
