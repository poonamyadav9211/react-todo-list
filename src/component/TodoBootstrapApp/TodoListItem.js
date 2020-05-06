import React, { Component } from 'react'
import '../SimpleTodoApp/simple-todo-style.css';

class TodoListItem extends Component {
    render() {
        const {title, handleDelet, handleEdit} = this.props
        return (
           <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
               <h6>{title}</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-success cursor-pointer" onClick={handleEdit} >
                        <i className="fa fa-pencil" />
                    </span>
                    <span className="mx-2 text-danger cursor-pointer" onClick={handleDelet}>
                        <i className="fa fa-trash" />
                    </span>
                </div>
           </li>
        )
    }
}

export default TodoListItem;
