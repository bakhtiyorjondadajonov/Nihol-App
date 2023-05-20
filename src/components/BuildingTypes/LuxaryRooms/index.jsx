import React from 'react'
import { Wrapper } from '../../Home/style'
import { Title } from '../../../Generic/Style/style'
import Building from "./../../../assets/images/building.svg"
import Card from '../../../Generic/Card'
function LuxaryRooms() {
  return (
     <Wrapper>
    <Title>Luxary Rooms</Title>
  
    <Wrapper.Container>
     <Card  title="2nd building" image={Building} />
     <Card  title="4th building" image={Building} />
    </Wrapper.Container>
   
     </Wrapper>
  )
}

export default LuxaryRooms
