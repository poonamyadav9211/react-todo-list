import React, { Component } from 'react'
import { connect } from 'react-redux';
import DotnetListItemsComponent from './DotnetListItemsComponent';

class DotnetListTodoComponent extends Component {
    render() {        
        return this.props.todos.map((todo) => 
            <DotnetListItemsComponent key={todo.id} todo={todo} 
                markComplet={this.props.markComplet} 
                delTodo={this.props.delTodo} 
                editTodo={this.props.editTodo} /> 
        )
    }
}

const mapStateToProps = state =>({
    todos: state.dotnetState.getAllTodo.todos
});

export default connect(mapStateToProps)(DotnetListTodoComponent)