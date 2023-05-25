import React from 'react'
import Navbar from '../components/Navbar'
import Login from '../components/Login'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import {RequireAuth} from 'react-auth-kit'
import i18n from "i18next";
import {initReactI18next} from "react-i18next"
import { en } from '../utils/locale/en'
import { ru } from '../utils/locale/ru'
import { uzLotin } from '../utils/locale/uzLotin'
import { uzKrill } from '../utils/locale/uzKrill'
import { useSelector } from 'react-redux'

import { paths } from '../utils/Path'
function Root() {
  const {lang}=useSelector((state)=>state.locale)
i18n.use(initReactI18next).init({
  resources:{
en:{
  translation:en
},
ru:{
translation:ru
},
uzLotin:{
  translation:uzLotin
},
uzKrill:{
translation:uzKrill
}
  },
  lng:lang,
  fallbackLng:"en"
})

  return (
    <Routes>
     <Route path='/' element={<RequireAuth loginPath="/login"><Navbar/></RequireAuth>}>
     {paths.map(({path,id,element,hasChild,children})=>(

      hasChild ? (
        <Route path={path} key={id} element={element}>
{children.map(({path,id,element,hasChild,children})=>(
  hasChild ? <Route path={path} key={id} element={element}>
{
  children.map(({path,id,element})=>(
    
<Route key={id} path={path} element={element}></Route>
  ))
}
  </Route>:<Route path={path} key={id} element={element}/>

))}

        </Route>
      ) :(
        <Route path={path} key={id} element={element}/>
        )
  
 
 
 
))}

      </Route>
   
    <Route path='/login' element={ <Login/> }></Route>
    </Routes>
  )
}

export default Root
