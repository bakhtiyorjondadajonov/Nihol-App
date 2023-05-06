import React from 'react'
import {notification} from "antd"
function useNotificationAPI() {
 return (status)=>{
switch(status){
    case 400:
         return notification.error({
            message:"the Phone number or the Password is missing",
            description:"Please,fill in all blanks!"

          })

    case 409:
        return notification.error({
    message: "User not found!!",
    description: "the Phone number or the Password is wrong!",
  }) 

  default:
    return       

}
   
 }
}

export default useNotificationAPI
