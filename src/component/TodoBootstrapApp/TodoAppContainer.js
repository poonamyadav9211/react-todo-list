import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'react-uuid';
import { Redirect } from 'react-router-dom';
import { isTokenExist } from '../BusinessLogic/common';
import {
    addTodoAction,
    deleteTodoAction,
    clearTodoAction,
    isButtonEditAction,
    editTodoAction
  } from '../../ReduxExample/Redux/Actions/todoAction'
import { connect } from 'react-redux';
  
class TodoAppContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            id:uuid(),
            item:''
        }
         this.inputRef = React.createRef();
    }
   

    handleChange = e =>{
        this.setState({
            item: e.target.value
        });
    };

    handleSubmit = (e) => { 
        e.preventDefault();
        if(!this.state.item) return;

        const newItem = {
            id: this.props.isButtonEdit? this.state.id: uuid(),
            title: this.state.item
        };

        if(this.props.isButtonEdit){
            this.props.editTodoAction(newItem);
            this.props.isButtonEditAction(false);
        } else {
            this.props.addTodoAction(newItem)
        }        

        this.setState({
            item: ''
        });

        this.inputRef.current.focus();
    };

    clearList = () => {
        this.props.clearTodoAction();
    };

    handleDelet = id => {
        this.props.deleteTodoAction(id);
    }

    handleEdit = id => {
        const todo = this.props.todos.find(item => item.id === id);
        this.setState({
            item:todo.title,
            id
        });
        this.props.isButtonEditAction(true);       
    }

    render() {
        if(isTokenExist()){
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-8 mt-4">
                            <h3 className="text-capitalize text-center">Todo Input</h3>
                                <TodoInput 
                                item={this.state.item}  
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                editItem={this.props.isButtonEdit}
                                inputRef={this.inputRef}
                                />
                                <TodoList 
                                items={this.props.todos}
                                clearList={this.clearList} 
                                handleDelet={this.handleDelet}
                                handleEdit={this.handleEdit}
                                />
                        
                        </div>
                    </div>
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
    todos: state.todoState.todosOpration.todos,
    todoItem: state.todoState.addTodoItems,
    isButtonEdit: state.todoState.isButtonEdit
  });
  
  const mapDispatchToProps = (dispatch) => {
    return {
     
      addTodoAction: todo => {
        dispatch(addTodoAction(todo))
      },
      deleteTodoAction: id => {
        dispatch(deleteTodoAction(id))
      },
      clearTodoAction: () => {
        dispatch(clearTodoAction())
      },
    //   getTodoAction: id => {
    //     dispatch(getTodoAction(id))
    //   },
      editTodoAction: (todo) => {
        dispatch(editTodoAction(todo))
      },
      isButtonEditAction: (isButtonEdit) => {
        dispatch(isButtonEditAction(isButtonEdit))
      }
    }
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(TodoAppContainer)
  
