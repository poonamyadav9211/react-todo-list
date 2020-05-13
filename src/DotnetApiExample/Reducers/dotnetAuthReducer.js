import {
    ADD_USER,
    GET_USER_BY_ID,
    ADD_AUTHUSER,
    GET_AUTHUSER_BY_ID,
    ISBUTTONEDIT,
    GET_AUTHUSER,
    GET_TOKEN
} from '../Actions/type';

import { combineReducers } from 'redux';

const initialState = {
    authUser: '',
    authUsers:[],
    token:''
}

const authUserOps = (state= initialState, action) => {
    switch(action.type){
        case ADD_AUTHUSER:
            return {
                authUsers: [...state.users, action.payload]
              } 
        case GET_AUTHUSER_BY_ID:
            return {
                authUser: action.payload
              }
        case GET_AUTHUSER:
            return{
                authUser: action.payload
            }
        default:
            return state;
    }
}

const isButtonEdit = (state= false, action) => {  
    if(action.type==ISBUTTONEDIT){
        return action.payload
    }  else {
        return state
    }
}

const getUserToken = (state= initialState, action) => {        
    if(action.type==GET_TOKEN){
        return {token: action.payload}
    }  else {
        return state
    }
}

export const authUserReducer = combineReducers({
    authUserOps,
    isButtonEdit,
    getUserToken
});