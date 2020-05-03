import React, { Component } from 'react';
import './simple-todo-style.css';

class AddTodo extends Component {
    constructor(){
        super();
        
        this.inputRef = React.createRef();
    }
    
    addTodoItem = (e) =>{
        e.preventDefault();
        const todo = {
            name : this.state.name,
            title : this.state.title,
            inputRef: this.inputRef
        }    
        
        this.props.addTodo(todo)

        // if(this.state.name && this.state.title){
        //     this.props.addTodo(todo)
        // }
        
        // this.setState({
        //     name:'',
        //     title:''
        // });

        this.inputRef.current.focus();

   }
 
    render() {
        const {name,title, handleChange, addTodo,inputRef} = this.props;
        return (
            <div className="main-container-div">
                <h3 className="header-style">Add Todo</h3>
                <form id="simple-todo-form" onSubmit={addTodo} >
                    <div>
                      <label>Name</label>
                      <input type="text" 
                      autoFocus
                      ref={inputRef}
                      name="name" 
                      value={name}
                      onChange={handleChange} 
                      />
                    </div><br />
                    <div>
                      <label>Task</label>
                      <input 
                      type="text" 
                      name="title" 
                      value={title}
                      onChange={handleChange} 
                     />
                    </div><br />
                      <input 
                       id="butSubmit"
                        type="submit" 
                        value="Submit" 
                        name="submit"
                        className="" />                    
                </form>
            </div>
        )
    }
}



export default AddTodo;