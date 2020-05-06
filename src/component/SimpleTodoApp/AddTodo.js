import React, { Component } from 'react';
import './simple-todo-style.css';
import { connect } from 'react-redux';

class AddTodo extends Component {
    constructor(){
        super();        
        this.inputRef = React.createRef();
    }
 
    render() {
        const {title,name,handleChange, addTodo,inputRef} = this.props;
        console.log(this.props.isButtonEdit)
        return (
            <div className="main-container-div">
                <h3 className="header-style">Add Todo</h3>
                <form id="simple-todo-form">
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
                        type="button" 
                        value="Submit" 
                        name="submit"
                        onClick={addTodo}
                        className={this.props.isButtonEdit? "display-none" : "display-block" } /> 
                    <input 
                       id="butSubmit"
                        type="button" 
                        value="Update" 
                        name="submit"
                        className={this.props.isButtonEdit? "display-block" : "display-none"} />                  
                </form>
            </div>
        )
    }
}


const mapStateToProps = state =>({
    todosOpration: state.todoState.todosOpration,
    todoItem: state.todoState.addTodoItems,
    isButtonEdit: state.todoState.isButtonEdit
  });
  
export default connect(mapStateToProps)(AddTodo)