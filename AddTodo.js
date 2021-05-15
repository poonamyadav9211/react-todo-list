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
            completed: this.state.completed,
            inputRef: this.inputRef,
            isEditTodo:false
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
        
        const {name, title,completed, handleChange, addTodo, editTodo, inputRef, isEditTodo, cancelTodoItem, markComplet} = this.props;
      
        return (
            <div className="main-container-div">
                <h3 className={isEditTodo?"edit-header-style":"header-style"}>{isEditTodo? "Edit Todo": "Add Todo"}</h3>
                <form id="simple-todo-form" onSubmit={isEditTodo? editTodo : addTodo} >
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
                    {isEditTodo && <><div>
                      <label>Task</label>
                      <input type="checkbox" 
                            onChange={markComplet}
                            checked={completed? true : false} />                 
                    </div><br /></>}
                      <input 
                       id="butSubmit"
                        type="submit" 
                        value={isEditTodo?"Update": "Submit" }
                        name="submit"
                        className={isEditTodo?"butEdit": "butSubmit"} />    
                        {isEditTodo && <><input 
                        id="butCancel"
                        type="button" 
                        value="Cancel"
                        name="cancel"
                        onClick={cancelTodoItem}
                        className="" /> 
                        
                        </>
                        }            
                </form>
            </div>
        )
    }
}



export default AddTodo;