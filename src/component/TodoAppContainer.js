import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'react-uuid';

class TodoAppContainer extends Component {
    state={
        items:[],
        id:uuid(),
        item:'',
        editItem:false
    }

    handleChange = e =>{
        this.setState({
            item: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            id: this.state.id,
            title: this.state.item
        };

        const updateItem = [...this.state.items, newItem];

        this.setState({
            items: updateItem,
            item: '',
            id: uuid(),
            editItem: false
        });
    };

    clearList = () => {
        this.setState({
            items: []
        });
    };

    handleDelet = id => {
        const filteItem = this.state.items.filter(item => 
            item.id !== id
        );

        this.setState({
            items: filteItem
        })
    }

    handleEdit = id => {
        const filteItem = this.state.items.filter(item => 
            item.id !== id
        );

        const selectedItem = this.state.items.find(item=> item.id === id);

        console.log('selectedItem: ',selectedItem)

        this.setState({
            items: filteItem,
            item: selectedItem.title,
            editItem: true,
            id: id
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-4">
                        <h3 className="text-capitalize text-center">Todo Input</h3>
                            <TodoInput 
                            item={this.state.item}  
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            editItem={this.state.editItem}
                            />
                            <TodoList 
                            items={this.state.items}
                            clearList={this.clearList} 
                            handleDelet={this.handleDelet}
                            handleEdit={this.handleEdit}
                            />
                    
                    </div>
                </div>
            </div>
            
        )
    }
}

export default TodoAppContainer;
