import React, { useState } from 'react'
import {Modal,Avatar,Segmented,Space} from "antd"
import { useDispatch, useSelector } from 'react-redux'
import { switchLocaleModalVisibility } from '../../../redux/modalSlice'
import useSegmented from '../../SegmentedAPI'
import { changeLanguage } from '../../../redux/localeSlice'
import i18n from "i18next";
function LocaleModal() {
const [locale,setLocale]=useState()
    const {localeModalVisibility}=useSelector((state)=>state.modal)
    const {localeSegmented}=useSegmented()
   const changeLanguageHandler=()=>{
i18n.changeLanguage(locale)
localStorage.setItem("locale",locale)
dispatch(switchLocaleModalVisibility())
   }
const dispatch=useDispatch()
  return (
    <Modal onOk={changeLanguageHandler} okText="change" title="Language Settings" open={localeModalVisibility} onCancel={()=>dispatch(switchLocaleModalVisibility())}>
   
    <Segmented  onChange={(e)=>setLocale(e)} block style={{marginTop:"10px"}}
    defaultValue="uzLotin"
      options={localeSegmented()}
    />
    
  
    </Modal>
  )
}

export default LocaleModal
