import {
    MARKCOMPLETED,
    ISBUTTONEDIT,
    CLEARTODO,
    SAVE_TODO,
    GET_TODO,
    GET_ALL_TODO,
    EDIT_TODO
} from '../Actions/type';

import { combineReducers } from 'redux';

const initialState = {
    todo: '',
    todos: [],
    title: '',
    text: ''
}

const dotnetTodosOps = (state= initialState, action) => {
    switch(action.type){
       
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

function saveTodo(state = initialState,action) {
    if(action.type===SAVE_TODO)       
        return {
          ...state,
          todo: action.payload
        } 
    else{
        return state
    }      
}

function getTodo(state = initialState ,action) {
    if(action.type===GET_TODO)         
        return {
          ...state,
          item: action.payload
        }   
    else{
        return state
    }
}

function getAllTodo(state = initialState,action) {
    if(action.type===GET_ALL_TODO)         
        return {
          ...state,
          todos: action.payload
        }
        else{
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
    dotnetTodosOps,
    isButtonEdit,
    saveTodo,
    getTodo,
    editTodo,
    getAllTodo
});