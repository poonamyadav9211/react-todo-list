import React, { Component } from 'react'
import { connect } from 'react-redux';
import DotnetAddTodoComponent from './DotnetAddTodoComponent';
import DotnetListTodoComponent from './DotnetListTodoComponent';
import { 
  saveTodo, 
  updateTodo, 
  getTodoById, 
  getAllTodos 
} from '../Actions/actionCreator';


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

            // const {todos} = this.props.todos;       
            //   let id;
            //     if(todos.length>0){
            //       id=parseInt(todos.slice(-1)[0].id + 1)
            //     } else {
            //       id = 1;
            //   }
    
            //   if(!title || !createdBy){
            //     return;
            //   }
              const newTods = {
                CreatedBy:createdBy,
                Title: title,
                Date :"",
                Completed: false
              }

              this.props.saveTodo(newTods, true);


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
    componentDidMount(){
      this.props.getAllTodos();
    }
    
    render() { 
        const {title, createdBy} = this.state;
        const {todos} = this.props.allTodos.todos
        // if(isTokenExist()){
          return (
            <div>
                    <DotnetAddTodoComponent 
                    addTodo={this.addTodo} 
                    editTodo={this.props.editTodo} 
                    handleChange={this.handleChange}
                    createdBy={createdBy}
                    title={title}
                    inputRef={this.inputRef}
                />
                <DotnetListTodoComponent 
                    todos={this.props.allTodos.todos} 
                    markComplet={this.markComplet}
                    delTodo={this.delTodo}
                    editTodo={this.editTodo}
                />
            </div>
        )
        //   }
        //   else{
        //       return <Redirect to="/login" />
        //   }
         
      }
}

// const mapStateToProps = state =>({
//     todos: state.dotnetState
// });
  
// const mapDispatchToProps = (dispatch) => {
//     return {      
//       saveTodoAction: todo => {
//         dispatch(saveTodoAction(todo))
//       },
//       deleteTodoAction: todo => {
//         dispatch(deleteTodoAction(todo))
//       },
//       markCompletedAction: todo => {
//         dispatch(markCompletedAction(todo))
//       },
//       editTodoAction: (todo) => {
//         dispatch(editTodoAction(todo))
//       },
//       isButtonEditAction: (isButtonEdit) => {
//         dispatch(isButtonEditAction(isButtonEdit))
//       }
//     }
// };

const mapStateToProps = state =>({
  allTodos: state.dotnetState.getAllTodo
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(DotnetContainerComponent)
  