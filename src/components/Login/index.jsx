import React, { useRef, useState } from 'react'

import { LoginBtn, Password, PhoneNumber, Wrapper } from './style'
import {LoadingOutlined} from "@ant-design/icons";
import {notification} from "antd"
import { LoginFn } from './login';
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
      setLoading(true)
        const userValue={
            phoneNumber:`${phoneNumberRef.current.input.value}`,
            password:passwordRef.current.input.value
        }
        if(!userValue.phoneNumber || !userValue.password){
          setLoading(false)
          notification.error({
            message:"the Phone number or the Password is missing",
            description:"Please,fill in all blanks!"

          })
          return
        }
        await LoginFn(userValue,setLoading)
        // try {
        //   const response=await axios({
        //     url:`${process.env.REACT_APP_MAIN_URL}/user/sign-in`,
        //     method:"POST",
        //     data:{
        //       phoneNumber:`+998${userValue.phoneNumber}`,
        //       password:userValue.password
        //     }
        //    })
        //    notification.success({message:"Succesfully logged in"})
        //    // ------- Now we got response from the API and we need to get the token and save it to local storage --------------
        //    const token=response.data.data.token;
        //    console.log(token)
        //   localStorage.setItem("token",token);
        //   setLoading(false)

        // } catch (error) {
        //   setLoading(false)
        //   notification.error({
        //     message:"User not found!!",
        //     description:"the Phone number or the Password is wrong!",
        //   })
        
        // }
      
      
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
