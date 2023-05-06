import React from 'react'
import { Wrapper } from './style'
import {Dropdown} from "antd"
import useDropDownAPI from '../../Generic/DropDownAPI';
function Navbar() {  
  
const userData=JSON.parse(localStorage.getItem("userData"));

    const {navbarDropDown} = useDropDownAPI()
  return (
  <Wrapper>
    <Wrapper.Left> 
        <Wrapper.Title>NIHOL</Wrapper.Title>
    </Wrapper.Left>
    <Wrapper.Right>
        <Dropdown trigger={["click"]} menu={{items:navbarDropDown()}}>
        <Wrapper.Avatar>{userData.name[0].toUpperCase()}</Wrapper.Avatar>
        </Dropdown>
    </Wrapper.Right>
  </Wrapper>
  )
}

export default Navbar
