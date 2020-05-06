import { 
    FIRSTNAME, 
    LASTNAME, 
    EMAIL, 
    PASSWORD, 
    ISUSERCREATED, 
    PASSWORDERROR, 
    EMAILERROR, 
    LASTNAMEERROR, 
    FIRSTNAMEERROR
} from '../Actions/type';

export const firstNameAction = (firstname)  => (
    {
        type: FIRSTNAME,
        payload: firstname
    }
);

export const lastNameAction = (lastname)  => (
    {
        type: LASTNAME,
        payload: lastname
    }
);

export const emailAction = (email)  => (
    {
        type: EMAIL,
        payload: email
    }
);

export const passwordAction = (password)  => (
    {
        type: PASSWORD,
        payload: password
    }
);

export const firstNameErrorAction = (firstnameerror)  => (
    {
        type: FIRSTNAMEERROR,
        payload: firstnameerror
    }
);

export const lastNameErrorAction = (lastnameerror)  => (
    {
        type: LASTNAMEERROR,
        payload: lastnameerror
    }
);

export const emailErrorAction = (emailerror)  => (
    {
        type: EMAILERROR,
        payload: emailerror
    }
);

export const passworErrordAction = (passworderror)  => (
    {
        type: PASSWORDERROR,
        payload: passworderror
    }
);

export const isUserCreatedAction = (isusercreated)  => (
    {
        type: ISUSERCREATED,
        payload: isusercreated
    }
);



