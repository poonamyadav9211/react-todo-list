/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react';
import AddTodo from './AddTodo';
import Todos from './Todos';
import './simple-todo-style.css';
import { Redirect } from 'react-router-dom';
import { isTokenExist } from '../BusinessLogic/common';

export default class SimpleTodoContainer extends Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          id: 1,
          name: 'poonam',
          title: 'task 1',
          completed: false,
        },
        {
          id: 2,
          name: 'amit',
          title: 'task 2',
          completed: true,
        },
        {
          id: 3,
          name: 'roshani',
          title: 'task 3',
          completed: false,
        },
      ],
      todo: '',
    };

    this.inputRef = React.createRef();
  }

  markComplet = (id, isEdit) => {
    let completed;
    if (isEdit === false) {
      completed = this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      this.setState({
        todos: completed,
      });
    } else {
      let completed = (this.state.completed = !this.state.completed);
      this.setState({
        completed: completed,
      });
    }
  };

  delTodo = (id) => {
    const delItem = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({
      todos: delItem,
    });

    if (this.state.inputRef) {
      this.state.inputRef.current.focus();
    }
  };

  addTodo = (e) => {
    console.log('addTodoItem: ', this.props.todos);
    e.preventDefault();
    let id;
    if (this.state.todos.length > 0) {
      id = parseInt(this.state.todos.slice(-1)[0].id + 1);
    } else {
      id = 1;
    }
    if (!this.state.name || !this.state.title) {
      return;
    }
    const newTods = {
      id,
      name: this.state.name,
      title: this.state.title,
      completed: false,
    };

    this.setState({
      todos: [...this.state.todos, newTods],
      todo: '',
      name: '',
      title: '',
      completed: false,
    });

    this.inputRef.current.focus();
  };

  selectTodo = (id) => {
    // select Todo from list
    const selectedTodo = this.state.todos.find((todo) => {
      return todo.id === id;
    });

    //// remove Todo from list
    // const updated = this.state.todos.filter((todo) => {
    //   return todo.id !== id;
    // });

    this.setState({
      id: selectedTodo.id,
      name: selectedTodo.name,
      title: selectedTodo.title,
      completed: selectedTodo.completed,
      isEditTodo: true,
      //todos: updated,
    });
  };

  editTodo = (e) => {
    e.preventDefault();

    const updatedData = this.state.todos.map((todo) =>
      todo.id === this.state.id
        ? {
            ...todo,
            name: this.state.name,
            title: this.state.title,
            completed: this.state.completed,
          }
        : todo
    );

    this.setState({
      isEditTodo: false,
      todos: updatedData,
      name: '',
      title: '',
    });
  };

  cancelTodoItem = () => {
    console.log('cancel: ', this.props);
    this.setState({
      isEditTodo: false,
      name: '',
      title: '',
      completed: false,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    if (isTokenExist()) {
      return (
        <div>
          <AddTodo
            todos={this.state.todos}
            id={this.state.id}
            name={this.state.name}
            title={this.state.title}
            completed={this.state.completed}
            inputRef={this.inputRef}
            isEditTodo={this.state.isEditTodo}
            handleChange={this.handleChange}
            addTodo={this.addTodo}
            editTodo={this.editTodo}
            selectTodo={this.selectTodo}
            cancelTodoItem={this.cancelTodoItem}
            markComplet={this.markComplet}
          />
          <Todos
            todos={this.state.todos}
            markComplet={this.markComplet}
            delTodo={this.delTodo}
            editTodo={this.editTodo}
            selectTodo={this.selectTodo}
          />
        </div>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}
