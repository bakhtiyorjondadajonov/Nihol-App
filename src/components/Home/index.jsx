import React from 'react'
import Card from '../../Generic/Card'
import allUsers from "../../assets/images/all_users.svg"
import halfTime from "../../assets/images//half_time.svg"
import timeUp from "../../assets/images/end_time.svg"
import emptyPlaces from "../../assets/images/empty_place.svg"
import report from "../../assets/images/report.svg"
import { Wrapper } from './style'
import { Title } from '../../Generic/Style/style'
function Home() {
  return (
    <Wrapper>
      <Title>Sections:</Title>
    <Wrapper.Container>
     <Card title="All Users" image={allUsers}/>
     <Card title="Half Time" image={halfTime}/>
    </Wrapper.Container>
    <Wrapper.Container>

     <Card title="Time Up" image={timeUp}/>
     <Card title="Empty places" image={emptyPlaces}/>
    </Wrapper.Container>
    <Title>Reports:</Title>
    <Wrapper.Container>
     <Card title="Report" image={report}/>
    </Wrapper.Container>
    </Wrapper>
  )
}

export default Home
