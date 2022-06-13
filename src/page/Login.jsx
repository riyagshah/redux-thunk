import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/loginpage.js/action';

const Login = () => {
    let email=useRef();
    let password=useRef();
    
const dispatch=useDispatch();


const handleSubmit=(event)=>{
event.preventDefault();
let value1=email.current.value;
let value2=password.current.value;
dispatch(loginUser({email:value1,password:value2}))
}


  return (
    <div>
        <form onSubmit={handleSubmit} >
        <input ref={email} type="email" />
        <br />
        <input ref={password} type="password"  />
        <br />
        <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login