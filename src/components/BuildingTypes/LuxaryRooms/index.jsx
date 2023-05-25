import React from 'react'
import { Wrapper } from '../../Home/style'
import { Title } from '../../../Generic/Style/style'
import Building from "./../../../assets/images/building.svg"
import Card from '../../../Generic/Card'
import { Outlet, useNavigate, useOutlet } from 'react-router-dom'
const ParentComponent=()=>{
const navigator=useNavigate()

  return   <Wrapper>
    <Title>Luxary Rooms</Title>
  
    <Wrapper.Container>
     <Card onClick={()=>navigator("3")}  title="3nd building" image={Building} />
     <Card onClick={()=>navigator("5")}  title="5th building" image={Building} />
    </Wrapper.Container>
   
     </Wrapper>
}
function LuxaryRooms() {
  const hasOutlet=useOutlet()
  return hasOutlet ? <Outlet/>:<ParentComponent/>
}

export default LuxaryRooms
