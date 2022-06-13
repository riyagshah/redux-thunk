import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {registerUser} from '../store/registerpage/action'
const Register = () => {
const dispatch=useDispatch();
const navigate=useNavigate()

const {regAuth}=useSelector((state)=>state.register.regAuth)
    const [input,setInput]=useState({
    name: "MASAI School",
    email: "hello@masai.com",
    username: "masai-school",
    mobile: "9876543210",
    description: "A Transformation in education!" 
    });

const handleChange=(e)=>{
    const {name,value,id}=e.target;

    setInput({...input,
    [name]:value,id:id
    })
}
const handleSubmit=(e)=>{
e.preventDefault();
dispatch(registerUser(input));
}
if(regAuth) return navigate('/')
  return (
    <div>
        <form onSubmit={handleSubmit} >
        <input type="text" placeholder='name' value={input.name} name="name" onChange={handleChange} />
        <br />
        <br />
            <input type="email" placeholder='email' value={input.email} name="email" id={input.email} onChange={handleChange} />
            <br />
            <br />
            <input type="password" placeholder='password' value={input.password} name="password"  onChange={handleChange}/>
            <br />
            <br />
            <input type="text" placeholder='username' value={input.username} name="username"  onChange={handleChange}/>
            <br />
            <br />
            <input type="number" placeholder='mobile' value={input.mobile} name="mobile"  onChange={handleChange} />
            <br />
            <br />
            <input type="text" placeholder='description' value={input.description} name="description"  onChange={handleChange}/>
            <br />
            <br />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Register



//   "name": "MASAI School",
//   "email": "hello@masai.com"
//   "password": "secret",
//   "username": "masai-school",
//   "mobile": "9876543210",
//   "description": "A Transformation in education!" 