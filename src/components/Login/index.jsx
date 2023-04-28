import React, { useRef, useState } from 'react'

import { LoginBtn, Password, PhoneNumber, Wrapper } from './style'
import {LoadingOutlined} from "@ant-design/icons"
import axios from 'axios'
 function Login() {
  const phoneNumberRef=useRef()
  const passwordRef=useRef()
  const [loading,setLoading]=useState(false)

  const onKeyDetect=(e)=>{

    if(e.key==="Enter" || e.type==="click"){
      onAuth()
    }
      }
    const onAuth=async ()=>{
        const userValue={
            phoneNumber:`+998${phoneNumberRef.current.input.value}`,
            password:passwordRef.current.input.value
        }
        try {
          const response=await axios({
            url:`${process.env.REACT_APP_MAIN_URL}/user/sign-in`,
            method:"POST",
            data:{
              ...userValue
            }
           })
           // ------- N
        } catch (error) {
          console.log(error)
        }
      
      
    }
  return (
    <Wrapper>
      <Wrapper.Container>
    <Wrapper.Title> Yana bir bor Salom👋</Wrapper.Title>
    <Wrapper.Description>Biz har kuni kechagidan ko'ra yaxshiroq xizmat ko'rsatishga intilamiz.</Wrapper.Description>
<PhoneNumber ref={phoneNumberRef} name="phoneNumber"  addonBefore="+998" size="large" bordered={false} placeholder='Enter your number...'/>
<Password onKeyDown={onKeyDetect} ref={passwordRef} name="password"   size="large"></Password>
<LoginBtn onClick={onKeyDetect} type='primary'> {loading?<LoadingOutlined />:"Login"} </LoginBtn>
      </Wrapper.Container>
    </Wrapper>
  )
}

export default Login
