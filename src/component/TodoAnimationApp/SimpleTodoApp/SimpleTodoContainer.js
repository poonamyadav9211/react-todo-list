import React, { Component } from 'react'
import AddTodo from './AddTodo';
import Todos from './Todos'
import './simple-todo-style.css';
import { Redirect } from 'react-router-dom';
import { isTokenExist } from '../BusinessLogic/common';

export default class SimpleTodoContainer extends Component {
  constructor(){
    super();

    this.state = {
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
      todo:''
    }

    this.inputRef = React.createRef();
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
    
        if(this.state.inputRef){
          this.state.inputRef.current.focus();
        }
        

        // this.setState({
        //   todos: [...this.state.todos.filter(todo => 
        //     todo.id !== id
        //     )]
        // });
    
      }
    
      addTodo = (e) =>{
        e.preventDefault();
          let id;
            if(this.state.todos.length>0){
              id=parseInt(this.state.todos.slice(-1)[0].id + 1)
            } else {
              id = 1;
          }
          if(!this.state.name || !this.state.title){
            return;
          }
          const newTods = {
            id,
            name: this.state.name,
            title: this.state.title,
            completed: false
          }
        
          this.setState({
            todos:[...this.state.todos,newTods],
            todo:'',
            name:'',
            title:''
          });
        
        this.inputRef.current.focus();
      }
    
      editTodo = (id) => {
        const selectedTodo = this.state.todos.find((todo) => {
          return todo.id === id
        });
        
        const updated = this.state.todos.filter((todo) => {
          return todo.id !== id
        });

        this.setState({
          name: selectedTodo.name,
          title:selectedTodo.title,
          todos:updated
        });

      }

      handleChange= (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

    render() {
      if(isTokenExist()){
        return (
          <div>
              <AddTodo 
                addTodo={this.addTodo} 
                editTodo={this.props.editTodo} 
                todo={this.state.todo}
                handleChange={this.handleChange}
                name={this.state.name}
                title={this.state.title}
                inputRef={this.inputRef}
                />
              <Todos 
                todos={this.state.todos} 
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
