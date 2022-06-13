import { GETDATA_LOADING } from "./type"

export const getData=()=>(dispatch)=>{
dispatch({type:GETDATA_LOADING});
}