import React from 'react'

function useInputAPI() {
  const phoneNumberFormatter=(phoneNumber)=>{
 phoneNumber=phoneNumber.replace(/[^\d]/g,"");
 const length=phoneNumber.length
 if(length<2) return phoneNumber;
if(length<=3) return `(${phoneNumber.slice(0,2)}) ${phoneNumber.slice(2)} `
if(length<=5) return `(${phoneNumber.slice(0,2)}) ${phoneNumber.slice(2,5)} `
if(length<=7)return `(${phoneNumber.slice(0,2)}) ${phoneNumber.slice(2,5)} - ${phoneNumber.slice(5,7)}`

return `(${phoneNumber.slice(0,2)}) ${phoneNumber.slice(2,5)} - ${phoneNumber.slice(5,7)} - ${phoneNumber.slice(7,9)}`
  }
  return {phoneNumberFormatter}
}

export default useInputAPI
