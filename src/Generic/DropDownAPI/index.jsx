import React, { useState } from 'react'
import {SettingOutlined,LogoutOutlined,TranslationOutlined} from '@ant-design/icons'
import UserModal from './UserModal';
import { useSelector,useDispatch } from 'react-redux';
import { switchProfileModalVisibility } from '../../redux/modalSlice';
import { switchLogoutModalVisibility } from '../../redux/logoutModalSlice';
import LogoutModal from './LogOutModal';

function useDropDownAPI() {
 const {profileModalVisibility}=useSelector((state)=>state.modal);
 const {logoutModalVisibility}=useSelector((state)=>state.logoutModal)
 const dispatch =useDispatch()

  // const {SettingsModal}=useModalAPI()

  const navbarDropDown=()=>{

    return [
      {
        label:<div><div onClick={()=>dispatch(switchProfileModalVisibility())}>"Settings"</div><UserModal /></div>,
        key: '0',
        icon:<SettingOutlined />
      },
      {
        label:"Switch Language",
        key: '1',
        icon:<TranslationOutlined />,
       
      },
      {
          label:<div><div onClick={()=>dispatch(switchLogoutModalVisibility())}>Logout</div><LogoutModal/></div>,
          key: '2',
          icon:<LogoutOutlined/>,
          danger:true
        }
    ] 
  }
 return {navbarDropDown}
}

export default useDropDownAPI
