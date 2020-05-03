import { ISLOGIN, AUTHTOKEN } from '../Actions/type';

export const isloginAction = (islogin)  => (
    {
        type: ISLOGIN,
        payload: islogin
    }
);

export const tokenAction = (token)  => (
    {
        type: AUTHTOKEN,
        payload: token
    }
); 
