import React from 'react'
import { useQuery } from 'react-query'
import useAxios from '../useAxios'

export function useQueryHandler({queryKey,queryLink,method="GET",body}) {

 const axios=useAxios()
    return useQuery(queryKey,()=>{
return axios({url:queryLink,method,body}).then((res)=>res.data.data)
  },{refetchOnWindowFocus:false})
}


