import React from 'react'
import { Wrapper } from '../../Home/style'
import { Title } from '../../../Generic/Style/style'
import Building from "./../../../assets/images/building.svg"
import Card from '../../../Generic/Card'
import { Outlet, useLocation, useNavigate, useOutlet } from 'react-router-dom'
const ParentComponent=()=>{
  const navigator=useNavigate()
  return <Wrapper>
  <Title>Ordnary Rooms</Title>

  <Wrapper.Container>
   <Card onClick={
    ()=>navigator(`2`)
   }  title="2nd building" image={Building} />
   <Card onClick={
    ()=>navigator(`4`)
   } title="4th building" image={Building} />
  </Wrapper.Container>
  <Wrapper.Container>
   <Card onClick={
    ()=>navigator(`6`)
   } title="6th building" image={Building} />
   
  </Wrapper.Container>
   </Wrapper>
}
function OrdnaryRooms() {
 
  const hasOutlet=useOutlet()
  
  return hasOutlet?<Outlet/>:<ParentComponent/>
}

export default OrdnaryRooms
