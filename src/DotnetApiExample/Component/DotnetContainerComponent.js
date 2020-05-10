import React, { Component } from 'react'
import { connect } from 'react-redux';
import DotnetAddTodoComponent from './DotnetAddTodoComponent';
import DotnetListTodoComponent from './DotnetListTodoComponent';
import { 
  saveTodo, 
  updateTodo, 
  getTodoById, 
  getAllTodos, 
  deleteTodo,
  markCompleted,
  editTodo
} from '../Actions/actionCreator';
import { isButtonEditAction } from '../Actions/dotnetTodoAction';

class DotnetContainerComponent extends Component {
  constructor(){
    super();    
    this.state = {
      updateId:0,
      title:'',
      createdBy:'',
      updateTodo: []
    }
    this.inputRef = React.createRef();
  }
 
  markComplet = (id) => { 
    this.props.markCompleted(id);    
  }
        
  delTodo = (id) =>{
    this.props.deleteTodo(id);
    this.inputRef.current.focus();    
  }
        
  addTodo = (e) =>{
    e.preventDefault();
    const { title, createdBy} = this.state; 
      if(!title || !createdBy){
        return;
      }

    const newTods = {
      Id:this.state.id,
      CreatedBy:createdBy,
      Title: title,
      Date :"",
      Completed: false
    }

    if(this.props.isEdit){
      this.props.editTodo(this.state.id,newTods);
      this.props.isButtonEditAction(false);
    } else{
      this.props.saveTodo(newTods, true);
    }
              
    this.setState({
      title:'',
      createdBy:'',
      editTodo:false
    });
    this.inputRef.current.focus();
  }
        
  editTodo = (id) => {
    const selectedTodo = this.props.allTodos.find((todo) => {
      return todo.Id === id
    });

    this.setState({
      id:selectedTodo.Id,
      createdBy: selectedTodo.CreatedBy,
      title: selectedTodo.Title,
      editTodo:true
    });                
    this.props.isButtonEditAction(true);
  }
    
  handleChange= (e) => {
    const {name, value} = e.target; 
      this.setState({
        [name]:value
      });
  }

  componentDidMount(){
    fetch('http://localhost:29495/api/todos')
      .then((response) => response.json())
      .then(booksList => {
        this.setState({ updateTodo: booksList });
      });
    this.props.getAllTodos();
  }

  getAllData = () =>{  
    if(!this.state.editTodo){     
      return this.state.updateTodo = this.props.allTodos
    } 
    return this.state.updateTodo;
  }
    
  render() { 
    const {title, createdBy} = this.state;
    this.getAllData()
    // if(isTokenExist()){
      return (
        <div>
          <DotnetAddTodoComponent 
            addTodo={this.addTodo} 
            handleChange={this.handleChange}
            createdBy={createdBy}
            title={title}
            inputRef={this.inputRef}
          />
            <DotnetListTodoComponent 
              todos={this.state.updateTodo} 
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

const mapStateToProps = state =>({
  allTodos: state.dotnetState.todosOps.todos,
  isEdit: state.dotnetState.isButtonEdit
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
    deleteTodo: id => {
      dispatch(deleteTodo(id))
    },
    getAllTodos: () => {
      dispatch(getAllTodos())
    },
    markCompleted: id => {
      dispatch(markCompleted(id))
    },
    editTodo: (id,selectedTodo) => {
      dispatch(editTodo(id,selectedTodo))
    },
    isButtonEditAction: (isEdit) => {
      dispatch(isButtonEditAction(isEdit))
    }
  }
};
  
  export default connect(mapStateToProps, mapDispatchToProps)(DotnetContainerComponent)
  