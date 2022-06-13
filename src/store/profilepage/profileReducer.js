import { GETDATA_ERROR, GETDATA_LOADING, GETDATA_SUCCESS } from "./type"

let init={
    getdata:{
        loading:false,
        error:false,
    },
    data:[]
}

export const profileReducer=(state=init,{type,payload})=>{
    switch(type){
        case GETDATA_LOADING:{
            return {...state};
        }
        case GETDATA_SUCCESS:{
            return {...state};
        }
        case GETDATA_ERROR:{
            return {...state};
        }
        default:{
            return state;
        }
    }
}