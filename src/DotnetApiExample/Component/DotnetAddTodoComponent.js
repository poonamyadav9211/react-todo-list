import React, { Component } from 'react'
import { connect } from 'react-redux';
import { 
    getAllTodos, 
    getTodoById, 
    updateTodo,
    saveTodo
 } from '../Actions/actionCreator';


class DotnetAddTodoComponent extends Component {
    constructor(){
        super();        
        this.inputRef = React.createRef();

        this.state ={
            id:''
        }
    }
    
    handleClick = () => {
        const todo = {
            Title: "Paw bhaji",
            CreatedBy: "Vishaka",
            Date: "2020-05-07T12:41:05.352Z"
        }
        
        this.props.saveTodo(todo,true);
    }

    editHandleClick = () => {
        const todo = {
            Id: parseInt(this.state.id),
            Title: "make rawa dosa",
            CreatedBy: "poonam 2",
            Date: "2020-05-07T12:41:05.352Z"
        }
        
        this.props.updateTodo(parseInt(this.state.id), todo,true);
    }

    getTodoClick = () => {
        this.props.getTodoById(parseInt(this.state.id))
    }

    getAllHandleClick = () => {
        this.props.getAllTodos()
    }

    // handleChange = (e) =>{
    //     this.setState({
    //         id : e.target.value
    //     })
    // }

    render() {
        const {title,createdBy,
            handleChange, 
            addTodo,inputRef
        } = this.props;
        
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
    todos: state.dotnetState.todoPosts
});

const mapDispatchToProps = (dispatch) => {
    return {     
        saveTodo: (todo,isPost) => {
        dispatch(saveTodo(todo,isPost))
      }, 
      updateTodo: (id,todo,isPost) => {
        dispatch(updateTodo(id,todo,isPost))
      },   
        getTodoById: id => {
        dispatch(getTodoById(id))
      },
      getAllTodos: () => {
        dispatch(getAllTodos())
      }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(DotnetAddTodoComponent)