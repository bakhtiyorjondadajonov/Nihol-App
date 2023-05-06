import React, { useState } from 'react'
import {Modal,Input} from "antd"
import { Wrapper } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { switchProfileModalVisibility } from '../../../redux/modalSlice';


function UserModal({isModalOpen,onCancel}) {
   const {profileModalVisibility}=useSelector((state)=>state.modal);
 const dispatch=useDispatch();
 
  return <Modal title="Profile" okText={"Save"} okType='disabled' open={profileModalVisibility} onOk={()=>dispatch(switchProfileModalVisibility())} onCancel={()=>dispatch(switchProfileModalVisibility())}>
   <Wrapper>
    <Wrapper.Avatar>B</Wrapper.Avatar>
    <Wrapper.Container >
    <div>
    <label htmlFor="name">Name</label>
    <Input id='name'/>
    </div>
<div>
    <label htmlFor="surname">Surname</label>
    <Input id='surname'/>
</div>
    </Wrapper.Container>
   </Wrapper>
   
  </Modal>
  
}

export default UserModal
