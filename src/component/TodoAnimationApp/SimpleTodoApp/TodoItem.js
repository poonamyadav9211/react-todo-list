import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './simple-todo-style.css';

class TodoItem extends Component {
    render() {
        const {id, title, name } = this.props.todo;
        return (
                <div className="todo-item-container" style={{textDecoration:this.props.todo.completed? 'line-through' : 'none',}}>
                    <h4 className="margin0">
                        <input type="checkbox" 
                            onChange={this.props.markComplet.bind(this, id)}
                            checked={this.props.todo.completed? true : false} />
                            <span>{title}</span> 
                            <label 
                            className="lbl-style">Crerated by : {name}</label>
                           
                        <button 
                            className="btn-del-style"
                            onClick={this.props.delTodo.bind(this,id)}
                        >X</button>
                        <button 
                            className="btn-edit-style" 
                            onClick={this.props.editTodo.bind(this,id)}
                        >+</button> 
                    </h4>
                </div>
        )
    }
}



TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}


export default TodoItem