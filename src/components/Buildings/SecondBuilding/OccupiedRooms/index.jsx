import React, { useEffect, useState } from 'react'
import { Room } from '../../../../Generic/Style/style'
import useAxios from '../../../../hooks/useAxios'
import { LoadingOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import { useQuery } from 'react-query'
function OccupiedRoom({userID}) {
    const axios=useAxios()
    const {isLoading,data}=useQuery("occupiedRooms",()=>{
       return axios({url:`/accomodation/2/user?_id=${userID}`}).then((res)=>{
        console.log(res)
       return res
        })
    })



 

const diffrence=dayjs(data?.data?.data?.endDate*1).diff(new Date(new Date()),"d")
  return (
    <Room  color='red'>{isLoading?<LoadingOutlined/>:diffrence}</Room>
  )
}

export default OccupiedRoom
