import React, { Component } from 'react'

export default class DotnetListItemsComponent extends Component {
    render() {
        const {Id, Title, CreatedBy } = this.props.todo; 
        return (
            <div className="todo-item-container" style={{textDecoration:this.props.todo.Completed? 'line-through' : 'none',}}>
                    <h4 className="margin0">
                        <input type="checkbox" 
                            onChange={this.props.markComplet.bind(this, Id)}
                            checked={this.props.todo.Completed? true : false} />
                            <span>{Title}</span> 
                            <label 
                            className="lbl-style">Crerated by : {CreatedBy}</label>                           
                        <button 
                            className="btn-del-style"
                            onClick={this.props.delTodo.bind(this,Id)}
                        >X</button>
                        <button 
                            className="btn-edit-style" 
                            onClick={this.props.editTodo.bind(this,Id)}
                        >+</button> 
                    </h4>
                </div>
        
        )
    }
}
