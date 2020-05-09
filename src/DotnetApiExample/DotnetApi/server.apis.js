import fetch from 'cross-fetch'
import { 
    getAllPosts, 
    saveTodoAction, 
    getTodoAction 
} from "../Actions/dotnetTodoAction";


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
        return dispatch(getAllPosts(data));
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
        return dispatch(saveTodoAction(data));
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
        dispatch(saveTodoAction(data))
        dispatch(getAllTodosApi());
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