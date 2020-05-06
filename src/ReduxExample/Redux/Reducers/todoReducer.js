import {
    GETTODO,
    GETALLTODO,
    ADDTODO,
    EDITTODO,
    DELETETODO,
    ADDTODOTITLE,
    ADDTODOTEXT,
    MARKCOMPLETED,
    ISBUTTONEDIT
} from '../Actions/type';

import { combineReducers } from 'redux';

const initialState = {
    todo: '',
    todos: [],
    title: '',
    text: ''
}

const todosOpration = (state= initialState, action) => {
    console.log('todo reducer action: ',action)
    switch(action.type){
        case GETTODO: 
            return {
                ...state,
                todo: state.todos.find(todo => {
                    if(todo.id === action.payload){
                        return todo
                    }
                })        
        }    
        case GETALLTODO:
            return state.todos.map(todo => {
                if(todo.id === action.payload){
                        return todo
                    } else {
                        return state
                    }
                });            
        case ADDTODO:
            return {
                  todos:[...state.todos,
                  action.payload]
            }              
        case EDITTODO:
            return{
                todos: state.todos.map(todo => 
                    {
                        console.log('todo.name = action.payload.name: ',todo.id, action.payload.id)
                        if(todo.id === action.payload.id)
                        {
                            todo.name = action.payload.name;
                            todo.title = action.payload.title;
                        } 
                        return todo
                    })
            }
        case DELETETODO:
            return{
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case MARKCOMPLETED:
            return{
                todos: state.todos.map(todo => {if(todo.id === action.payload){
                    todo.completed =! todo.completed
                }return todo})
            }
        default:
            return state;
    }
}

const addTodoItems = (state= initialState, action) => {  
    switch(action.type){        
        case ADDTODOTITLE:
            return{
                ...state,
                title: action.payload
            }
        case ADDTODOTEXT:
            return{
                ...state,
                text: action.payload
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

export const todoReducer = combineReducers({
    todosOpration,
    addTodoItems,
    isButtonEdit
});