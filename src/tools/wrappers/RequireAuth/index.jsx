import React from 'react'
import { Navigate } from 'react-router-dom';

function RequireAuth({children}) {
    
const authed=false;
if(!authed) return <Navigate to="/login"/>


  return children

}

export default RequireAuth
