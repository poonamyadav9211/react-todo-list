import { 
    GET_AUTHUSER_BY_ID, 
    ADD_AUTHUSER, 
    GET_AUTHUSER, 
    GET_TOKEN
} from "./type";

export const addAuthUserAction = (user)  => (
    {
        type: ADD_AUTHUSER,
        payload: user
    }
);

export const getAuthUserByIdAction = (id)  => (
    {
        type: GET_AUTHUSER_BY_ID,
        payload: id
    }
);

export const getAuthUserAction = (user)  => (
    {
        type: GET_AUTHUSER,
        payload: user
    }
);

export const getTokenAction = (token)  => (
    {
        type: GET_TOKEN,
        payload: token
    }
);