import React, { Component } from 'react'

class TodoListItem extends Component {
    render() {
        const {title, handleDelet, handleEdit} = this.props
        return (
           <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
               <h6>{title}</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-success" onClick={handleEdit} >
                        <i className="fa fa-pencil" />
                    </span>
                    <span className="mx-2 text-danger" onClick={handleDelet}>
                        <i className="fa fa-trash" />
                    </span>
                </div>
           </li>
        )
    }
}

export default TodoListItem;
