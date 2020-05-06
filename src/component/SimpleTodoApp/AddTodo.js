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
        return (
            <div className="main-container-div">
                <h3 className="header-style">Add Todo</h3>
                <form id="simple-todo-form">
                    <div>
                      <label>Task</label>
                      <input 
                      type="text" 
                      autoFocus
                      name="title" 
                      value={title}
                      onChange={handleChange} 
                     />
                    </div><br />
                    <div>
                      <label>Create By</label>
                      <input type="text"                      
                      ref={inputRef}
                      name="name" 
                      value={name}
                      onChange={handleChange} 
                      />
                    </div><br />            
                    <button 
                       id="butSave"
                        type="button" 
                        name="save"
                        onClick={addTodo}
                        className={this.props.isButtonEdit? 
                        "display-none" : 
                        "display-block" } >Save</button>
                    <button 
                       id="butUpdate"
                        type="button" 
                        name="update"
                        onClick={addTodo}
                        className={this.props.isButtonEdit? 
                        "display-block" : 
                        "display-none"} >Update</button>                 
                </form>
            </div>
        )
    }
}


const mapStateToProps = state =>({
    isButtonEdit: state.todoState.isButtonEdit
  });
  
export default connect(mapStateToProps)(AddTodo)