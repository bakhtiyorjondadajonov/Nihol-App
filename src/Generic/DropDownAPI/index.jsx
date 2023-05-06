import React, { useState } from 'react'
import {SettingOutlined,LogoutOutlined,TranslationOutlined} from '@ant-design/icons'
import UserModal from './UserModal';
import { useSelector,useDispatch } from 'react-redux';
import { switchProfileModalVisibility } from '../../redux/modalSlice';

function useDropDownAPI() {

 const {profileModalVisibility}=useSelector((state)=>state.modal);
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
          label:"Logout",
          key: '2',
          icon:<LogoutOutlined/>,
          danger:true
        }
    ] 
  }
 return {navbarDropDown}
}

export default useDropDownAPI
