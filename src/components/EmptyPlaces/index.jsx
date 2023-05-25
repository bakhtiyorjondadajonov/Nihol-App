import React from 'react'
import { Wrapper } from '../Home/style'
import { Title } from '../../Generic/Style/style'
import Card from '../../Generic/Card'
import OrdnaryRooms from "./../../assets/images/ordinary_room.svg"
import LuxaryRooms from "./../../assets/images/luxury_room.svg"
import Cottages from "./../../assets/images/mansion.svg"
import { useTranslation } from 'react-i18next'
import { Outlet, useLocation, useNavigate,useOutlet } from 'react-router-dom'
const Types=()=>{
  const {t}=useTranslation()
  const navigate=useNavigate()
  const navigateHandler=(path)=>{
    navigate(`${path}`)
     }
  return <Wrapper>
  <Title>{t("empty_places.section_title")}</Title>

  <Wrapper.Container>
   <Card onClick={()=>navigateHandler("ordnary-rooms")} title={t("empty_places.ordnary_rooms")} image={OrdnaryRooms} />
   <Card onClick={()=>navigateHandler("luxary-rooms")} title={t("empty_places.luxary_rooms")} image={LuxaryRooms} />
  </Wrapper.Container>
  <Wrapper.Container>
   <Card onClick={()=>navigateHandler("cottages")} title={t("empty_places.cottages")} image={Cottages} />
   
  </Wrapper.Container>
   </Wrapper>
}

function EmptyPlaces() {
  const hasOutlet=useOutlet()




  return <>
   {hasOutlet?<Outlet/>:<Types/>}
    </>
  
}

export default EmptyPlaces
