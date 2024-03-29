import React, { Component } from 'react'
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    
    render() {
        return this.props.todos.map((todo) => 
            <TodoItem key={todo.id} todo={todo} 
                markComplet={this.props.markComplet} 
                delTodo={this.props.delTodo} 
                editTodo={this.props.editTodo} 
                selectTodo={this.props.selectTodo} /> 
        )
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos