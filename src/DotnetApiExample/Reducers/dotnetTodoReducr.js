import {
    GETTODO,
    GETALLTODO,
    ADDTODO,
    EDITTODO,
    DELETETODO,
    MARKCOMPLETED,
    ISBUTTONEDIT,
    CLEARTODO,
    RECEIVE_POSTS
} from '../Actions/type';

import { combineReducers } from 'redux';

const initialState = {
    todo: '',
    todos: [],
    title: '',
    text: ''
}

const dotnetTodosOps = (state= initialState, action) => {
    console.log('add todo actions: ',action) 
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
        case RECEIVE_POSTS:
            console.log('reciev post : ',action.payload)
            return { 
                ...state, 
                todos: action.payload
            };
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

export const dotnetTodoReducer = combineReducers({
    dotnetTodosOps,
    isButtonEdit
});