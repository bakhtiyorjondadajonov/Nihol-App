import React, { useEffect, useState } from 'react'
import { Room } from '../../../../Generic/Style/style'
import useAxios from '../../../../hooks/useAxios'
import { LoadingOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import { useQuery } from 'react-query'
import { useQueryHandler } from '../../../../hooks/useQuery'
function OccupiedRoom({userID}) {
    
    const {isLoading,data}=useQueryHandler({queryKey:`user/${userID}`,queryLink:`/accomodation/4/user?_id=${userID}`})




 

const diffrence=dayjs(data?.endDate*1).diff(new Date(new Date()),"d")
  return (
    <Room  color='red'>{isLoading?<LoadingOutlined/>:diffrence}</Room>
  )
}

export default OccupiedRoom
