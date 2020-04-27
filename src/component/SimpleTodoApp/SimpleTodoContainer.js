import React, { Component } from 'react'
import AddTodo from './AddTodo';
import Todos from './Todos'
import './simple-todo-style.css';
import { Redirect } from 'react-router-dom';
import { isTokenExist } from '../BusinessLogic/common';

export default class SimpleTodoContainer extends Component {
    state = {
        todos:[
          {
            id:1,
            name:'poonam',
            title:'task 1',
            completed:false
          },
          {
            id:2,
            name:'amit',
            title:'task 2',
            completed:true
          },
          {
            id:3,
            name:'roshani',
            title:'task 3',
            completed:false
          }
        ],
        inputRef: ''
      }

      markComplet = (id) => {
        const completed = this.state.todos.map((todo) => {
          if(todo.id === id){
            todo.completed =! todo.completed
          }
          return todo
        });
    
        this.setState({
          todos:completed
        });
    
        // this.setState({
        //   todos: this.state.todos.map(todo => {
        //     if(todo.id === id){
        //       todo.completed = !todo.completed
        //     }
        //     return todo;
        //   })
        // });   
    
      }
    
      delTodo = (id) =>{
        const delItem= this.state.todos.filter(todo => {
          return todo.id !== id
        });
    
        this.setState({
          todos:delItem
        });
    
        this.state.inputRef.current.focus();

        // this.setState({
        //   todos: [...this.state.todos.filter(todo => 
        //     todo.id !== id
        //     )]
        // });
    
      }
    
      addTodo = (todo) =>{
          let id;
            if(this.state.todos.length>0){
              id=parseInt(this.state.todos.slice(-1)[0].id + 1)
            } else {
              id = 1;
            }
        const newTods = {
          id,
          name: todo.name,
          title: todo.title,
          completed: false
        }
        
        this.setState({
          todos:[...this.state.todos,newTods],
          inputRef:todo.inputRef
        });
    
      }
    
      editTodo = (id) => {
          const edit = this.state.todos.filter((todo) => {
          return todo.id === id
        });
    
        return edit;
      }

    render() {
      if(isTokenExist()){
        return (
          <div>
              <AddTodo addTodo={this.addTodo} editTodo={this.props.editTodo} />
              <Todos todos={this.state.todos} 
              markComplet={this.markComplet}
              delTodo={this.delTodo}
              editTodo={this.editTodo}
              />
          </div>
      )
        }
        else{
            return <Redirect to="/login" />
        }
       
    }
}
