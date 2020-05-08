import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts, newPostUser } from '../DotnetApi/server.apis';
import ApiTest, { postTodoUser1 } from '../../component/TestApis/ApiTest';


class DotnetAddTodoComponent extends Component {
    constructor(){
        super();        
        this.inputRef = React.createRef();
    }
    
    handleClick = () => {
        const todo = {
            Title: "Paw bhaji",
            CreatedBy: "Vishaka",
            Date: "2020-05-07T12:41:05.352Z"
        }
        postTodoUser1(todo);
    }
    render() {
        console.log('this props: ', this.props.todos)
        const {title,createdBy,handleChange, addTodo,inputRef} = this.props;
        
        return (
            <div className="main-container-div">
                <h3 className="header-style">Add Todo</h3>
                <form id="simple-todo-form">
                    <div>
                        <button type="button" onClick={this.handleClick}>Click Me</button>
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
                      name="createdBy" 
                      value={createdBy}
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
    todos: state.dotnetState
});

const mapDispatchToProps = (dispatch) => {
    return {     
        newPostUser: todo => {
        dispatch(newPostUser(todo))
      }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(DotnetAddTodoComponent)