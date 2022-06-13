import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./type"
import axios from 'axios'
export const loginUser=(payload)=>(dispatch)=>{
dispatch({type:LOGIN_LOADING});
axios.post("https://masai-api-mocker.herokuapp.com/auth/login",payload)
.than(res=>dispatch({type:LOGIN_SUCCESS,payload:res.error}))
.catch(err=>dispatch({type:LOGIN_ERROR}))
}