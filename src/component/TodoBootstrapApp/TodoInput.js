import React, { Component, createRef } from 'react'

class TodoInput extends Component {  
    constructor(props){
        super(props);
        
    }
    render() {
        
        const { item, inputRef ,handleChange, handleSubmit, editItem } = this.props;  
             
        return (
            <div className="card card-body my-3"> 
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fa fa-book" />
                            </div>
                        </div>
                        <input type="text" 
                        autoFocus
                        className="form-control" 
                        placeholder="add todo item"
                        value={item}
                        ref = {inputRef}
                        onChange={handleChange}
                        />  
                    </div>
                    <button type="submit" 
                    className={ 
                        editItem 
                        ? 'btn btn-block btn-success mt-3' 
                        : 'btn btn-block btn-primary mt-3'} >
                       {editItem? 'Edit Item' : 'Add Item'}
                    </button>
                </form>
            </div>
        )
    }
}

export default TodoInput;
