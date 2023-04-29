import React from 'react'
import { Wrapper } from './style'
import {Dropdown} from "antd"
import {SettingOutlined,LogoutOutlined,TranslationOutlined} from '@ant-design/icons'
function Navbar() {    
    const items = [
        {
          label:"Settings",
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
            icon:<LogoutOutlined />,
            danger:true
          }
      ];
  return (
  <Wrapper>
    <Wrapper.Left> 
        <Wrapper.Title>NIHOL</Wrapper.Title>
    </Wrapper.Left>
    <Wrapper.Right>
        <Dropdown trigger={["click"]} menu={{items}}>
        <Wrapper.Avatar>B</Wrapper.Avatar>
        </Dropdown>
    </Wrapper.Right>
  </Wrapper>
  )
}

export default Navbar
