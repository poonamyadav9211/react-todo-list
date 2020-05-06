import React, { Component } from 'react'
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Todos extends Component {
    
    render() {        
        return this.props.todos.map((todo) => 
            <TodoItem key={todo.id} todo={todo} 
                markComplet={this.props.markComplet} 
                delTodo={this.props.delTodo} 
                editTodo={this.props.editTodo} /> 
        )
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}


const mapStateToProps = state =>({
    todos: state.todoState.todosOpration.todos
  });

export default connect(mapStateToProps)(Todos)