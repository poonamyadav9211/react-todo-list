import React, { Component } from 'react'
import DotnetListItemsComponent from './DotnetListItemsComponent';

class DotnetListTodoComponent extends Component {
    render() {        
        return this.props.todos.map((todo) => 
            <DotnetListItemsComponent key={todo.Id} todo={todo} 
                markComplet={this.props.markComplet} 
                delTodo={this.props.delTodo} 
                editTodo={this.props.editTodo} /> 
        )
    }
}

export default DotnetListTodoComponent