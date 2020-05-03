import {ISLOGIN, AUTHTOKEN} from '../Actions/type';
import { combineReducers } from 'redux';
import rootReducers from './rootReducer';

const initialState = {
    isLogin : false,
    token: ''
}

const isLogin = (state= initialState, action) => {
    if(action.type == ISLOGIN){
            return action.payload
    } else{
        return state
    }
}

const authToken = (state= initialState.token, action) => { 
    console.log('call auth')
    if(action.type == AUTHTOKEN){
        console.log('auth state: ',action.payload)
            return action.payload
    } else{
        return state
    }
}


export const authReducer = combineReducers({
    authToken,
    isLogin
  });

  
  

 