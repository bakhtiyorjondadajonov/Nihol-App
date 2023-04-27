import React, { useRef } from 'react'
import { LoginBtn, Password, PhoneNumber, Wrapper } from './style'

function Login() {
  const phoneNumberRef=useRef()
  const passwordRef=useRef()

    
   
    const onAuth=()=>{
        const userData={
            phoneNumber:phoneNumberRef.current.input.value,
            password:passwordRef.current.input.value
        }
    }
  return (
    <Wrapper>
      <Wrapper.Container>
    <Wrapper.Title> Yana bir bor Salom👋</Wrapper.Title>
    <Wrapper.Description>Biz har kuni kechagidan ko'ra yaxshiroq xizmat ko'rsatishga intilamiz.</Wrapper.Description>
<PhoneNumber ref={phoneNumberRef} name="phoneNumber"  addonBefore="+998" size="large" bordered={false} placeholder='Enter your number...'/>
<Password ref={passwordRef} name="password"   size="large"></Password>
<LoginBtn onClick={onAuth} type='primary'>Login</LoginBtn>
      </Wrapper.Container>
    </Wrapper>
  )
}

export default Login
