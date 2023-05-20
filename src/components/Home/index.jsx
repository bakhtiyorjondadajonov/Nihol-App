import React from 'react'
import Card from '../../Generic/Card'
import allUsers from "../../assets/images/all_users.svg"
import halfTime from "../../assets/images//half_time.svg"
import timeUp from "../../assets/images/end_time.svg"
import emptyPlaces from "../../assets/images/empty_place.svg"
import report from "../../assets/images/report.svg"
import { Wrapper } from './style'
import { Title } from '../../Generic/Style/style'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate=useNavigate()
  const {t}=useTranslation()
  return (
    <Wrapper>
      <Title>{t("home_page.section_title")}:</Title>
    <Wrapper.Container>
     <Card  onClick={()=>navigate("/all-users")} title={t("home_page.section_all_users")} image={allUsers}/>
     <Card onClick={()=>navigate("/half-time")} title={t("home_page.section_half_time")} image={halfTime}/>
    </Wrapper.Container>
    <Wrapper.Container>

     <Card onClick={()=>navigate("/time-up")} title={t("home_page.section_time_up")} image={timeUp}/>
     <Card onClick={()=>navigate("/empty-places")} title={t("home_page.section_empty_places")} image={emptyPlaces}/>
    </Wrapper.Container>
    <Title>{t("home_page.reports_title")}:</Title>
    <Wrapper.Container>
     <Card onClick={()=>navigate("/reports")} title={t("home_page.section_reports")} image={report}/>
    </Wrapper.Container>
    </Wrapper>
  )
}

export default Home
