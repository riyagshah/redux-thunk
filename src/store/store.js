import {legacy_createStore,combineReducers,applyMiddleware} from 'redux';

import { loginReducer } from './loginpage.js/loginReducer';
import { profileReducer } from './profilepage/profileReducer';
import {registerReducer} from './registerpage/registerReducer'
import thunk from 'redux-thunk'

const rootReducer=combineReducers({
login:loginReducer,
register:registerReducer,
profile:profileReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))