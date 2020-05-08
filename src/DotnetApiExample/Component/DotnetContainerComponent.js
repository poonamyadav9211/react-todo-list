import React, { Component } from 'react'
import { connect } from 'react-redux';
import { 
    addTodoAction,
    editTodoAction,
    deleteTodoAction,
    markCompletedAction,
    isButtonEditAction
 } from '../Actions/dotnetTodoAction'
import DotnetAddTodoComponent from './DotnetAddTodoComponent';
import DotnetListTodoComponent from './DotnetListTodoComponent';

class DotnetContainerComponent extends Component {
    constructor(){
        super();
    
        this.state = {
          updateId:0,
          title:'',
          createdBy:''
        }
    
        this.inputRef = React.createRef();
      }
       
    
          markComplet = (id) => { 
            this.props.markCompletedAction(id);    
          }
        
          delTodo = (id) =>{
            this.props.deleteTodoAction(id);
    
            if(this.state.inputRef){
              this.state.inputRef.current.focus();
            }    
          }
        
          addTodo = (e) =>{
            e.preventDefault();
            const { title, createdBy} = this.state; 
            const {todos} = this.props.todos;       
              let id;
                if(todos.length>0){
                  id=parseInt(todos.slice(-1)[0].id + 1)
                } else {
                  id = 1;
              }
    
              if(!title || !createdBy){
                return;
              }
              const newTods = {
                id: this.props.isButtonEdit? this.state.updateId : id,
                createdBy,
                title,
                completed: false
              }
              this.props.addTodoAction(newTods);
            //   if(this.props.isButtonEdit){
            //     this.props.editTodoAction(newTods);
            //     this.props.isButtonEditAction(false);
            //   } else{
            //     this.props.addTodoAction(newTods); 
            //   }
              
            this.setState({
                title:'',
                createdBy:''
            })
            this.inputRef.current.focus();
          }
        
          editTodo = (id) => {
            const selectedTodo = this.props.todosOpration.todos.find((todo) => {
              return todo.id === id
            });
    
            Object.assign(this.props.todoItem, 
              {
                createdBy: selectedTodo.name, 
                title: selectedTodo.title
              });
    
            this.props.isButtonEditAction(true);  
            this.setState({
              isEdit:true,
              updateId: selectedTodo.id
            })
          }
    
          handleChange= (e) => {
            const {name, value} = e.target; 
            this.setState({
                [name]:value
            })
          }
    
    render() {
        console.log('this props: ', this.props.todos)
        console.log('======== post ===========',this.props.getPosts)    
        const {title, createdBy} = this.state;
        // if(isTokenExist()){
          return (
            <div>
                DotnetContainerComponent
                 <DotnetAddTodoComponent 
                    addTodo={this.addTodo} 
                    editTodo={this.props.editTodo} 
                    handleChange={this.handleChange}
                    createdBy={createdBy}
                    title={title}
                    inputRef={this.inputRef}
                />
                {/*<DotnetListTodoComponent 
                    todos={this.state.todos} 
                    markComplet={this.markComplet}
                    delTodo={this.delTodo}
                    editTodo={this.editTodo}
                /> */}
            </div>
        )
        //   }
        //   else{
        //       return <Redirect to="/login" />
        //   }
         
      }
}

const mapStateToProps = state =>({
    todos: state.dotnetState
});
  
const mapDispatchToProps = (dispatch) => {
    return {      
      addTodoAction: todo => {
        dispatch(addTodoAction(todo))
      },
      deleteTodoAction: todo => {
        dispatch(deleteTodoAction(todo))
      },
      markCompletedAction: todo => {
        dispatch(markCompletedAction(todo))
      },
      editTodoAction: (todo) => {
        dispatch(editTodoAction(todo))
      },
      isButtonEditAction: (isButtonEdit) => {
        dispatch(isButtonEditAction(isButtonEdit))
      }
    }
};
  
  export default connect(mapStateToProps, mapDispatchToProps)(DotnetContainerComponent)
  