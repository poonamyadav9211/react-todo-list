import {
    MARKCOMPLETED,
    ISBUTTONEDIT,
    CLEARTODO,
    SAVE_TODO,
    GET_TODO,
    GET_ALL_TODO,
    EDIT_TODO,
    DELETE_TODO
} from '../Actions/type';

import { combineReducers } from 'redux';

const initialState = {
    todo: '',
    todos: [],
    title: '',
    text: ''
}

const todosOps = (state= initialState, action) => {    
    switch(action.type){
        case GET_ALL_TODO:
            return {
                todos: action.payload
            }
        case SAVE_TODO:
            return {
                todos: [...state.todos, action.payload]
              } 
        case GET_TODO:
            return {
                todo: action.payload
              }
        case EDIT_TODO:
            return{
                todos: state.todos.map(todo => 
                    {
                        if(todo.Id === action.payload.Id)
                        {
                            todo.CreatedBy = action.payload.CreatedBy;
                            todo.Title = action.payload.Title;
                        } 
                        return todo
                    })
            }
        case DELETE_TODO:
            return {todos:state.todos.filter((todo) => todo.Id !== action.id)};
          
        case MARKCOMPLETED:
            return{
                todos: state.todos.map(todo => {if(todo.id === action.payload){
                    todo.completed =! todo.completed
                }return todo})
            }
       
        case CLEARTODO:
            return{
                todos: []
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

function editTodo(state = initialState,action) {
    if(action.type===EDIT_TODO)         
        return {
          ...state,
          todos: action.payload
        } 
    else{
        return state
    }   
}


export const dotnetTodoReducer = combineReducers({
    todosOps,
    isButtonEdit,
    editTodo
});