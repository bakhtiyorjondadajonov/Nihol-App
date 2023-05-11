import React from 'react'
import { Wrapper } from './style'
import {Dropdown} from "antd"
import useDropDownAPI from '../../Generic/DropDownAPI';
import { Outlet } from 'react-router-dom';
import {useAuthUser} from 'react-auth-kit'
function Navbar() {  
  
// const userData=JSON.parse(localStorage.getItem("userData"));
const authedUser=useAuthUser()

    const {navbarDropDown} = useDropDownAPI()
  return (
    <>
  <Wrapper>
    <Wrapper.Left> 
        <Wrapper.Title>NIHOL</Wrapper.Title>
    </Wrapper.Left>
    <Wrapper.Right>
        <Dropdown trigger={["click"]} menu={{items:navbarDropDown()}}>
        <Wrapper.Avatar>{authedUser().name[0].toUpperCase()}</Wrapper.Avatar>
        </Dropdown>
    </Wrapper.Right>
  </Wrapper>
  <Outlet/>
  </>
  )
}


export default Navbar
