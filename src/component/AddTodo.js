import React, { Component } from 'react';

class AddTodo extends Component {
    constructor(props){
        super(props);
        console.log("prpos :",props)
    }
    getStyle = () =>{
        return{
            background: 'rgb(229, 216, 216)',
            padding: '5px',
            border: '1.5px rgb(118, 46, 46) dotted',
            width: '40%',
            margin: '20px 0px 20px 450px'
        }
    }

    butStyle ={
            backgroundColor: '#4CAF50', /* Green */
            width: '400px',
            border: 'none',
            color: 'white',
            padding: '10px 10px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px'
          
    }
    
    inputStyle ={
        width: '60%', 
        padding: '10px 10px',
        boxSizing: 'border-box'
    }

    headerStyle ={
        textAlign: 'center',
        color: '#807070',
        fontSize: '20px',
        margin: '5px 0px 5px 104px',
        padding: '5px',
        border: '1px dotted #b0a0a0',
        width: '390px',
        borderRadius: '2px',
        backgroundColor: '#e3c9c9'          
    }
    
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
            <div style={this.getStyle()}>
                <h3 style={this.headerStyle}>Add Todo</h3>
                <form onSubmit={this.addTodoItem} style={{padding:'5px', margin:'5px 0px 10px 100px'}}>
                    <div style={{width:'500px'}}>
                      <label style={{width: '100px', display: 'inline-block'}}>Name</label>
                      <input type="text" 
                      name="name" 
                      value={this.state.name}
                      onChange={this.onchange} 
                      style={this.inputStyle} />
                    </div><br />
                    <div style={{width:'500px'}}>
                      <label style={{width: '100px', display: 'inline-block'}}>Task</label>
                      <input 
                      type="text" 
                      name="title" 
                      value={this.state.title}
                      onChange={this.onchange} 
                     style= {this.inputStyle}/>
                    </div><br />
                    <div>
                      <input style={this.butStyle} type="submit" value="Submit" name="submit" />
                    </div>
                </form>
            </div>
        )
    }
}



export default AddTodo;