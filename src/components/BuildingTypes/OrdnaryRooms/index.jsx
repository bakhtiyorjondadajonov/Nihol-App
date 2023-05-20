import React from 'react'
import { Wrapper } from '../../Home/style'
import { Title } from '../../../Generic/Style/style'
import Building from "./../../../assets/images/building.svg"
import Card from '../../../Generic/Card'
function OrdnaryRooms() {
  return (
     <Wrapper>
    <Title>Ordnary Rooms</Title>
  
    <Wrapper.Container>
     <Card  title="2nd building" image={Building} />
     <Card  title="4th building" image={Building} />
    </Wrapper.Container>
    <Wrapper.Container>
     <Card  title="6th building" image={Building} />
     
    </Wrapper.Container>
     </Wrapper>
  )
}

export default OrdnaryRooms
