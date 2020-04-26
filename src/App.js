import React, {Component} from 'react';
import TodoAppContainer from './component/TodoAppContainer';

class App extends Component {
  state = {
    todos:[
      {
        id:1,
        name:'poonam',
        title:'task 1',
        completed:false
      },
      {
        id:2,
        name:'amit',
        title:'task 2',
        completed:true
      },
      {
        id:3,
        name:'roshani',
        title:'task 3',
        completed:false
      }
    ]
  }

  markComplet = (id) => {
    const completed = this.state.todos.map((todo) => {
      if(todo.id === id){
        todo.completed =! todo.completed
      }
      return todo
    });

    this.setState({
      todos:completed
    });

    // this.setState({
    //   todos: this.state.todos.map(todo => {
    //     if(todo.id === id){
    //       todo.completed = !todo.completed
    //     }
    //     return todo;
    //   })
    // });   

  }

  delTodo = (id) =>{
    const delItem= this.state.todos.filter(todo => {
      return todo.id !== id
    });

    this.setState({
      todos:delItem
    });


    // this.setState({
    //   todos: [...this.state.todos.filter(todo => 
    //     todo.id !== id
    //     )]
    // });

  }

  addTodo = (todo) =>{

    const newTods = {
      id: parseInt(this.state.todos.slice(-1)[0].id + 1),
      name: todo.name,
      title: todo.title,
      completed: false
    }
    
    this.setState({
      todos:[...this.state.todos,newTods]
    });

  }

  editTodo = (id) => {
    console.log('Id: ',id)
    const edit = this.state.todos.filter((todo) => {
      return todo.id === id
    });

    console.log(edit);
    //this.props.editTodo(edit)
    return edit;
  }

  render() {
    return (
      <div>
        <TodoAppContainer />


        {/* <AddTodo addTodo={this.addTodo} editTodo={this.props.editTodo} />
        <Todos todos={this.state.todos} 
          markComplet={this.markComplet}
          delTodo={this.delTodo}
          editTodo={this.editTodo}
           /> */}
      </div>
    )
  }
}



export default App;
