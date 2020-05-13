import fetch from 'cross-fetch'
import { 
    getAllPosts,
    saveTodoAction,
    getTodoAction, 
    deleteTodoAction,
    markCompletedAction,
    editTodoAction
} from "../Actions/dotnetTodoAction";
import { 
    addAuthUserAction, 
    getAuthUserByIdAction, 
    getAuthUserAction,
    getTokenAction
} from '../Actions/dotnetAuthAction';

// todo apis
export const getAllTodosApi = ()  => {  
    return async dispatch => {
      const res = await fetch(`http://localhost:29495/api/todos`, {
            method: 'GET',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        dispatch(getAllPosts(data));
    }
  }
    
export const saveTodoApi = (todo)  => {  
    return async dispatch => {
        const res = await fetch('http://localhost:29495/api/todos/', {
            method: 'POST',
            body: JSON.stringify(todo),
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();    
        dispatch(saveTodoAction(data));
        dispatch(getAllTodosApi())
    }
}

export const editTodoApi = (id,todo)  => {  
    return async dispatch => {
        const res = await fetch(`http://localhost:29495/api/todos/${id}`, {
            method: 'PUT',
            body: JSON.stringify(todo),
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json();
        dispatch(editTodoAction(data));
    }
}

export const getTodoApi = (id)  => { 
    return async dispatch => {
        const res = await fetch(`http://localhost:29495/api/todos/${id}`, {
            method: 'GET',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        return dispatch(getTodoAction(data));
    }
}

export const deleteTodoApi = (id)  => { 
    return async dispatch => {
        const res = await fetch(`http://localhost:29495/api/todos/${id}`, {
            method: 'DELETE',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        dispatch(deleteTodoAction(data));
        dispatch(getAllTodosApi())
    }
}

export const markCompletedApi = (id)  => { 
    return async dispatch => {
        const res = await fetch(`http://localhost:29495/api/todos/markCompleted/${id}`, {
            method: 'GET',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        dispatch(markCompletedAction(data));
        dispatch(getAllTodosApi())
    }
}
// ------------------ end todo---------------

// auth apis
// get token
export const getTokenApi = (username, password)  => { 
    return async dispatch => {
        const res = await fetch(`http://localhost:13873/gettoken/${username}/${password}`, {
            method: 'GET',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        dispatch(getTokenAction(data));
    }
}

export const addAuthUserApi = (user)  => {  
    return async dispatch => {
        const res = await fetch('http://localhost:29495/api/user/', {
            method: 'POST',
            body: JSON.stringify(user),
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();    
        dispatch(addAuthUserAction(data));
    }
}

export const getAuthUserByIdApi = (id)  => { 
    return async dispatch => {
        const res = await fetch(`http://localhost:29495/api/user/${id}`, {
            method: 'GET',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        dispatch(getAuthUserByIdAction(data));
    }
}

export const getAuthUserApi = (user)  => { 
    console.log('=======getAuthUserApi=========',user)
    return async dispatch => {
        const res = await fetch(`http://localhost:29495/api/user/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        console.log('=======datat=========',data)
        dispatch(getAuthUserAction(data));
    }
}