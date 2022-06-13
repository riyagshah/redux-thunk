import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const RequiredAuth = ({children}) => {

const {isAuth}=useSelector((state)=>state.login.login);
const location=useLocation();
let form={
    pathname:location.pathname
}

if(isAuth)  return (children)
return <Navigate to="/" state={form} replace></Navigate>   

}

export default RequiredAuth