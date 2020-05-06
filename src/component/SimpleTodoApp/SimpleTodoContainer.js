import React, { Component } from 'react'
import AddTodo from './AddTodo';
import Todos from './Todos'
import './simple-todo-style.css';
import { Redirect } from 'react-router-dom';
import { isTokenExist } from '../BusinessLogic/common';
import { connect } from 'react-redux';
import {
  addTodoTextAction,
  addTodoTitleAction,
  addTodoAction,
  deleteTodoAction,
  markCompletedTodoAction,
  getTodoAction,
  editTodoAction,
  isButtonEditAction
} from '../../ReduxExample/Redux/Actions/todoAction'

class SimpleTodoContainer extends Component {
  constructor(){
    super();

    this.state = {
      updateId:0
    }

    this.inputRef = React.createRef();
  }
   

      markComplet = (id) => { 
        this.props.markCompletedTodoAction(id);    
      }
    
      delTodo = (id) =>{
        this.props.deleteTodoAction(id);

        if(this.state.inputRef){
          this.state.inputRef.current.focus();
        }    
      }
    
      addTodo = (e) =>{
        e.preventDefault();
        const { text, title} = this.props.todoItem; 
        const {todos} = this.props.todosOpration;       
          let id;
            if(todos.length>0){
              id=parseInt(todos.slice(-1)[0].id + 1)
            } else {
              id = 1;
          }

          if(!text || !title){
            return;
          }
          const newTods = {
            id: this.props.isButtonEdit? this.state.updateId : id,
            name: text,
            title,
            completed: false
          }

          if(this.props.isButtonEdit){
            this.props.editTodoAction(newTods);
            this.props.isButtonEditAction(false);
          } else{
            this.props.addTodoAction(newTods); 
          }
          
        this.props.addTodoTextAction('');
        this.props.addTodoTitleAction('');
        this.inputRef.current.focus();
      }
    
      editTodo = (id) => {
        const selectedTodo = this.props.todosOpration.todos.find((todo) => {
          return todo.id === id
        });

        Object.assign(this.props.todoItem, 
          {
            text: selectedTodo.name, 
            title: selectedTodo.title
          });

        this.props.isButtonEditAction(true);  
        this.setState({
          isEdit:true,
          updateId: selectedTodo.id
        })
      }

      handleChange= (e) => {
        const {name, value} = e.target; 
        switch (name) {
          case "title":
            this.props.addTodoTitleAction(value)
            break;
          case "name":
            this.props.addTodoTextAction(value)
          default:
            break;
        }

        // this.setState({
        //   [e.target.name]: e.target.value
        // })
      }

    render() {
      this.props.todoItem.item=this.props.todo      
      const { text, title} = this.props.todoItem;
      if(isTokenExist()){
        return (
          <div>
              <AddTodo 
                addTodo={this.addTodo} 
                editTodo={this.props.editTodo} 
                todo={this.props.todo}
                handleChange={this.handleChange}
                name={text}
                title={title}
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



const mapStateToProps = state =>({
  todosOpration: state.todoState.todosOpration,
  todo: state.todoState.todosOpration.todo,
  todoItem: state.todoState.addTodoItems,
  isButtonEdit: state.todoState.isButtonEdit
});

const mapDispatchToProps = (dispatch) => {
  return {
    addTodoTextAction: text => {
      dispatch(addTodoTextAction(text))
    },
    addTodoTitleAction: title => {
        dispatch(addTodoTitleAction(title))
    },
    addTodoAction: todo => {
      dispatch(addTodoAction(todo))
    },
    deleteTodoAction: todo => {
      dispatch(deleteTodoAction(todo))
    },
    markCompletedTodoAction: todo => {
      dispatch(markCompletedTodoAction(todo))
    },
    getTodoAction: id => {
      dispatch(getTodoAction(id))
    },
    editTodoAction: (todo) => {
      dispatch(editTodoAction(todo))
    },
    isButtonEditAction: (isButtonEdit) => {
      dispatch(isButtonEditAction(isButtonEdit))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleTodoContainer)
