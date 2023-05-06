import React, { useRef, useState } from 'react'

import { LoginBtn, Password, PhoneNumber, Wrapper } from './style'
import {LoadingOutlined} from "@ant-design/icons";
import {notification} from "antd"
import useNotificationAPI from '../../Generic/NotificationAPI';
import axios from 'axios';
 function Login() {
  const statusChecker=useNotificationAPI()
  const phoneNumberRef=useRef()
  const passwordRef=useRef()
  const [loading,setLoading]=useState(false)

  const onKeyDetect=(e)=>{
  if(loading)return // I used this to to the second task.Now during loading we cannot send request to log in
    if(e.key==="Enter" || e.type==="click")onAuth()
      
    
      }
    const onAuth=async ()=>{
      setLoading(true)
        const userValue={
            phoneNumber:`${phoneNumberRef.current.input.value}`,
            password:passwordRef.current.input.value
        }
        if(!userValue.phoneNumber || !userValue.password){
          setLoading(false)
          statusChecker(400)
         
          return
        }
        try {
          const {data}=await axios({
            url:`${process.env.REACT_APP_MAIN_URL}/user/sign-in`,
            method:"POST",
            data:{
              phoneNumber:`+998${userValue.phoneNumber}`,
              password:userValue.password
            }
           })
           notification.success({message:"Succesfully logged in"})
           // ------- Now we got response from the API and we need to get the token and save it to local storage --------------
           const token=data.data.token;
         const userData=data.data.user;
          
          localStorage.setItem("token",token);
          localStorage.setItem("userData",JSON.stringify(userData));
          
          setLoading(false)

        } catch (error) {
          setLoading(false)
          statusChecker(error.response.status)
        
        }
      
      
    }
  return (
    <Wrapper>
      <Wrapper.Container>
    <Wrapper.Title> Yana bir bor Salom👋</Wrapper.Title>
    <Wrapper.Description>Biz har kuni kechagidan ko'ra yaxshiroq xizmat ko'rsatishga intilamiz.</Wrapper.Description>
<PhoneNumber ref={phoneNumberRef} name="phoneNumber"  addonBefore="+998" size="large" bordered={false} placeholder='Enter your number...'/>
<Password onKeyDown={onKeyDetect} ref={passwordRef} name="password"   size="large"></Password>
<LoginBtn  onClick={onKeyDetect} type='primary'> {loading?<LoadingOutlined />:"Login"} </LoginBtn>
      </Wrapper.Container>
    </Wrapper>
  )
}

export default Login
