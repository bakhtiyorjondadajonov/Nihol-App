import React from 'react'
import Navbar from '../components/Navbar'
import Login from '../components/Login'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import {RequireAuth} from 'react-auth-kit'

function Root() {
  return (
    <Routes>
     <Route path='/' element={<RequireAuth loginPath="/login"><Navbar/></RequireAuth>}>
<Route path='/' element={<Home/>}/>
      </Route>
   
    <Route path='/login' element={ <Login/> }></Route>
    </Routes>
  )
}

export default Root
