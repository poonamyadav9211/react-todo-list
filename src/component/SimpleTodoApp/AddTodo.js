import React, { Component } from 'react';
import './simple-todo-style.css';

class AddTodo extends Component {

    state = {
            name: '',
            title:''            
        }

    onchange= (e) => {
        this.setState({
           [e.target.name]: e.target.value
        });
    }

    addTodoItem = (e) =>{
        e.preventDefault();
        const todo = {
            name : this.state.name,
            title : this.state.title
        }        
        if(this.state.name && this.state.title){
            this.props.addTodo(todo)
        }
        this.setState({
            name:'',
            title:''
        })
   }
 
    render() {
        return (
            <div className="main-container-div">
                <h3 className="header-style">Add Todo</h3>
                <form id="simple-todo-form" onSubmit={this.addTodoItem} >
                    <div style={{width:'500px'}}>
                      <label>Name</label>
                      <input type="text" 
                      name="name" 
                      value={this.state.name}
                      onChange={this.onchange} 
                      />
                    </div><br />
                    <div style={{width:'500px'}}>
                      <label>Task</label>
                      <input 
                      type="text" 
                      name="title" 
                      value={this.state.title}
                      onChange={this.onchange} 
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