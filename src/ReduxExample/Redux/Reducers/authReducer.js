import {ISLOGIN, AUTHTOKEN} from '../Actions/type';
import { combineReducers } from 'redux';

const initialState = {
    isLogin : false,
    token: ''
}

const isLogin = (state= initialState, action) => {
    if(action.type === ISLOGIN){
            return action.payload
    } else{
        return state
    }
}

const authToken = (state= initialState.token, action) => { 
    if(action.type === AUTHTOKEN){
            return action.payload
    } else{
        return state
    }
}


export const authReducer = combineReducers({
    authToken,
    isLogin
  });

  
  

 