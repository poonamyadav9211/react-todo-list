import React, { Component } from 'react'
import { connect } from 'react-redux';
import DotnetListItems from './DotnetListItems';

class DotnetListTodoComponent extends Component {
    render() {        
        return this.props.todos.map((todo) => 
            <DotnetListItems key={todo.id} todo={todo} 
                markComplet={this.props.markComplet} 
                delTodo={this.props.delTodo} 
                editTodo={this.props.editTodo} /> 
        )
    }
}

const mapStateToProps = state =>({
    todos: state.dotnetState
});

export default connect(mapStateToProps)(DotnetListTodoComponent)