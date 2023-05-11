import {Modal} from "antd"
import { useSignOut } from 'react-auth-kit'
import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { switchLogoutModalVisibility } from "../../../redux/logoutModalSlice"
import {ExclamationCircleFilled} from "@ant-design/icons"
function LogoutModal() {
  const signOut=useSignOut()
  const {logoutModalVisibility}=useSelector((state)=>state.logoutModal)
  const dispatch=useDispatch()
  const closeModal=()=>{
    dispatch(switchLogoutModalVisibility())
  }
  const signOutFn=()=>{
   closeModal()
   setTimeout(()=>signOut(),500)
  
  }
  return (
    <Modal open={logoutModalVisibility} okText="Logout" okType="danger" onCancel={closeModal} onOk={signOutFn}>
      <h2 style={{marginBottom:"20px"}}><ExclamationCircleFilled style={{color:"orange"}} /> Warning</h2>
      <div>Are you sure you want to log out?</div>
    </Modal>
  )
}

export default LogoutModal
