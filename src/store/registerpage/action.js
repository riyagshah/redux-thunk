import axios from "axios";
import { REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS } from "./type"

export const registerUser=(payload)=>(dispatch)=>{
dispatch({type:REGISTER_LOADING});
axios.post("https://masai-api-mocker.herokuapp.com/auth/register",payload)
.then(res=>dispatch({type:REGISTER_SUCCESS}))
.catch(err=>dispatch({type:REGISTER_ERROR}));
}