import React, { useState } from 'react'
import {SettingOutlined,LogoutOutlined,TranslationOutlined} from '@ant-design/icons'
import UserModal from './UserModal';
import { useSelector,useDispatch } from 'react-redux';
import { switchLocaleModalVisibility, switchProfileModalVisibility } from '../../redux/modalSlice';
import { switchLogoutModalVisibility } from '../../redux/logoutModalSlice';
import LogoutModal from './LogOutModal';
import { MenuWrapper } from './style';
import LocaleModal from './LocaleModal';
import { useTranslation } from 'react-i18next';

function useDropDownAPI() {
  const {t}=useTranslation()
 const {profileModalVisibility}=useSelector((state)=>state.modal);
 const {logoutModalVisibility}=useSelector((state)=>state.logoutModal)
 const dispatch =useDispatch()

  // const {SettingsModal}=useModalAPI()

  const navbarDropDown=()=>{

    return [
      {
        label:<MenuWrapper><div onClick={()=>dispatch(switchProfileModalVisibility())}>{t("navbarDrop.settings")}</div><UserModal /></MenuWrapper>,
        key: '0',
        icon:<SettingOutlined />
      },
      {
        label:<MenuWrapper><div onClick={()=>dispatch(switchLocaleModalVisibility())}>{t("navbarDrop.languages")}</div><LocaleModal/></MenuWrapper>,
        key: '1',
        icon:<TranslationOutlined />,
       
      },
      {
          label:<MenuWrapper><div onClick={()=>dispatch(switchLogoutModalVisibility())}>{t("navbarDrop.logout")}</div><LogoutModal/></MenuWrapper>,
          key: '2',
          icon:<LogoutOutlined/>,
          danger:true
        }
    ] 
  }
 return {navbarDropDown}
}

export default useDropDownAPI
