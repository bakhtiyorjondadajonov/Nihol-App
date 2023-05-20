import React, { useRef, useState } from 'react'

import { Wrapper,LoginBtn, Password, PhoneNumber } from './style'
import {LoadingOutlined} from "@ant-design/icons";
import {notification} from "antd"
import useNotificationAPI from '../../Generic/NotificationAPI';

import useInputAPI from '../../Generic/InputAPI';
import { useNavigate } from 'react-router-dom';
import { useSignIn } from 'react-auth-kit';
import useAxios from '../../hooks/useAxios';
 function Login() {
  const axios=useAxios()
  const navigate=useNavigate()
  const signIn = useSignIn()
  const [phoneNumber,setPhoneNumber]=useState("")
  const {phoneNumberFormatter}=useInputAPI()
  const statusChecker=useNotificationAPI()
  const passwordRef=useRef()
  const [loading,setLoading]=useState(false)
const phoneInputHandler=(e)=>{
setPhoneNumber(phoneNumberFormatter(e.target.value));

}
  const onKeyDetect=(e)=>{
  if(loading)return // I used this to to the second task.Now during loading we cannot send request to log in
    if(e.key==="Enter" || e.type==="click")onAuth()
      
    
      }
    const onAuth=async ()=>{
      setLoading(true)
        const userValue={
            phoneNumber:phoneNumber.replace(/[^\d]/g,""),
            password:passwordRef.current.input.value
        }
        if(!userValue.phoneNumber || !userValue.password){
          setLoading(false)
          statusChecker(400)
         
          return
        }
        try {
         const {data}= await axios({url:"/user/sign-in",method:"POST",body:{
          phoneNumber:`+998${userValue.phoneNumber}`,
          password:userValue.password
        }})
           notification.success({message:"Succesfully logged in"})
           // ------- Now we got response from the API and we need to get the token and save it to local storage --------------
          
          localStorage.setItem("token", data.data.token)
          setLoading(false)
         signIn(
            {
                token: data.data.token,
                expiresIn:60,
                tokenType: "Bearer",
                authState: data.data.user,                 
            })
          navigate("/")
        } catch (error) {
          setLoading(false)
          // statusChecker(error.response.status)
        
        }
      
      
    }
  return (
    <Wrapper>
      <Wrapper.Container>
    <Wrapper.Title> Yana bir bor Salom👋</Wrapper.Title>
    <Wrapper.Description>Biz har kuni kechagidan ko'ra yaxshiroq xizmat ko'rsatishga intilamiz.</Wrapper.Description>
<PhoneNumber onChange={phoneInputHandler} value={phoneNumber}  name="phoneNumber"  addonBefore="+998" size="large" bordered={false} placeholder='Enter your number...'/>
<Password onKeyDown={onKeyDetect} ref={passwordRef} name="password"   size="large"></Password>
<LoginBtn  onClick={onKeyDetect} type='primary'> {loading?<LoadingOutlined />:"Login"} </LoginBtn>
      </Wrapper.Container>
    </Wrapper>
  )
}

export default Login
