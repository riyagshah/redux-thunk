import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./type"

let init={
    login:{
        error:false,
        loading:false,
        isAuth:false
    },
    logout:{
        error:false,
        loading:false,
    },
    token:""
}

export const loginReducer=(state=init,{type,payload})=>{
switch(type){
    case LOGIN_LOADING:{
        return {...state,login:{...state.login,loading:true}};
    }
    case LOGIN_SUCCESS:{
        return {...state,login:{...state.login,loading:false,isAuth:true},token:payload};
    }
    case LOGIN_ERROR:{
        return {...state,login:{...state.login,loading:false},token:""};
    }
    case LOGOUT:{
        return {...state,login:{...state.login,isAuth:false}};
    }
    default:{
        return state;
    }
}
}