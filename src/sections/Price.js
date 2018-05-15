import React from 'react'
import styled from 'styled-components'
import background from '../assets/homebg5.jpg'
import Button from '../components/Button'

const Wrapper = styled.div`
  background-image:
    linear-gradient(to bottom,
      rgba(17, 17, 17, 1) 0%,
      rgba(17, 17, 17, 0.1) 20%,
      rgba(17, 17, 17, 0.1) 80%,
      rgba(17, 17, 17, 1) 100%
    ),
    linear-gradient(to right,
      rgba(17, 17, 17, 1) 0%,
      rgba(17, 17, 17, 0.1) 20%,
      rgba(17, 17, 17, 0.1) 80%,
      rgba(17, 17, 17, 1) 100%
    ),
    url(${background});
  background-repeat: no-repeat;
  background-position: center;
`

const Content = styled.div`
  margin: auto;
  max-width: 900px;
`

const Line = styled.div`
  margin: 25px 0;
  height: 2px;
  background: #eeeeee;
  background: linear-gradient(to right, rgba(0,0,0,0), #eeeeee, rgba(0,0,0,0));
`

const Title = styled.h1`
  text-align: center;
  font-style: italic;
`

const Grid = styled.div`
  display: grid;
  padding: 0 1em;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`

const Detail = styled.div``

const Sale = styled.div`
text-align: right;
font-style: italic;

@media (max-width: 780px) {
  text-align: left;
}
`

const Full = styled.h3`
  margin: 0;
  font-size: 40px;
  color: #fcb03a;
  font-weight: normal;
  margin-bottom: -20px;
`

const Promotion = styled.h1`
  margin: 0;
  font-size: 70px;
  font-style: italic;
`

const Buy = styled.span`
  font-size: 26px;
  font-style: italic;
`
const Price = () => (
  <Wrapper>
    <Content>
      <Title>TICKET</Title>
      <Line />
      <Grid>
        <Detail>
          {/* <p>
            น็อค สปอตวานิลารัม โนติสพาวเวอร์ น้องใหม่ มายองเนสแจมมาราธอนแฮมเบอร์เกอร์
            นู้ดโหลนแมชีนปัจเจกชน แชมเปญแพลนวโรกาสดีพาร์ทเมนต์ แพ็คชัวร์ ล็อบบี้แรงผลักฮันนีมูน
            บ๋อยยูโรไมค์แคมเปญ เอ๋อวัจนะ ปูอัด
          </p> */}
          <p>
            เนื่องด้วยบัตรมีจำนวนจำกัด ทางเราจึงจะต้องคัดเลือก
            ผู้สมัครที่ผ่านการคัดเลือก 100 ท่าน จึงจะดำเนินการจ่ายค่าเข้างาน
          </p>
          <p>
            รับสมัคร : วันนี้ - 8 มิถุนายน 2561
            ประกาศผล : 10 มิถุนายน 2561
            ผู้ที่ได้รับคัดเลือกดำเนินการจ่ายค่าเข้างานภายใน 15 มิถุนายน 2561
          </p>
          <p>
            ติดตามรายละเอียด และ สอบถามเพิ่มเติม FB : Nisit Generation
          </p>
        </Detail>
        <Sale>
          <Full><del>4,800 บาท</del></Full>
          <Promotion>800 บาท</Promotion>
        </Sale>
      </Grid>
      <Line />
      <div style={{ textAlign: 'center' }}>
        <Button padding="1em 2em">
          <Buy>
            GET TICKET NOW
          </Buy>
        </Button>
      </div>
    </Content>
  </Wrapper>
)

export default Price
