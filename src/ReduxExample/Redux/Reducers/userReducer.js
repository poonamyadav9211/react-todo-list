import {FIRSTNAME, LASTNAME, EMAIL, PASSWORD, ISUSERCREATED, FIRSTNAMEERROR, LASTNAMEERROR, EMAILERROR, PASSWORDERROR} from '../Actions/type';
import { combineReducers } from 'redux';

const initialState = {
    firstname: null,
    lastname: null,
    email: null,
    password: null,
    formErrors: {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    },
    isusercreated: false
}

const users = (state= initialState, action) => {  
    console.log('call user===========')
    switch (action.type) {
        case FIRSTNAME:
            return {
                ...state,
               firstname: action.payload
            }
            break;
        case LASTNAME:
            return {
                ...state,
               lastname: action.payload
            }            
            break;
        case EMAIL:
            return {
                ...state,
               email: action.payload
            }
            break;
        case PASSWORD:
            return {
                ...state,
               password: action.payload
            }
            break;
        default:
            return state
            break;
    }
}

const usersError = (state= initialState.formErrors, action) => {  
    switch (action.type) {
        case FIRSTNAMEERROR:
            return {
                ...state,
               firstname: action.payload
            }
            break;
        case LASTNAMEERROR:
            return {
                ...state,
               lastname: action.payload
            }            
            break;
        case EMAILERROR:
            return {
                ...state,
               email: action.payload
            }
            break;
        case PASSWORDERROR:
            return {
                ...state,
               password: action.payload
            }
            break;
        default:
            return state
            break;
    }
}

const isUserCreated = (state= initialState.isusercreated, action) => {   
    
    if(action.type == ISUSERCREATED){
            return action.payload
    } else{
        return state
    }
}

export const usersReducer = combineReducers({
    users,
    usersError,
    isUserCreated
});