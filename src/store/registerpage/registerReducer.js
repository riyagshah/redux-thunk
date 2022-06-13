import { REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS } from "./type";
const init={
    loading:false,
    error:false,
    regAuth:false,
    token:null
}

export const registerReducer=(state=init,{type,payload})=>{
    switch(type){
        case REGISTER_SUCCESS:{
            return {...state,regAuth:true,loading:false,token:payload}
        }
        case REGISTER_ERROR:{
            return {...state,loading:false,error:true}
        }
        case REGISTER_LOADING:{
            return {...state,loading:true}
        }
        default:{
            return state
        }
    }
}