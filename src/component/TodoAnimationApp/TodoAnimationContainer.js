import React, { Component } from 'react';
import  './todo-animation-style.css';
import ListItem from './ListItem';

class TodoAnimationContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            items:[],
            currentItem:{
                text: '',
                key: ''
            }
        }

        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deletItem = this.deletItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
    }

    handleInput(e){
        this.setState({
            currentItem:{
                text:e.target.value,
                key:Date.now()
            }
        })
    }

    addItem(e){
        e.preventDefault();
        const newItem=this.state.currentItem;
        if(newItem.text!==""){
            const newItems=[...this.state.items,newItem];
            this.setState({
                items:newItems,
                currentItem:{
                    text:'',
                    key:''
                }
            })
        }
    }

    deletItem(key){
        const filterItem = this.state.items.filter(item => {
            return item.key !== key
        });

        this.setState({
            items :filterItem
        })
    }

    setUpdate(key, text){
        console.log(key,text)
        const items = this.state.items;
        items.map(item => {
            if(item.key===key){
                item.text=text
            }
        })

        this.setState({
            items: items
        })
    }

    render() {
        return (
            <div className="animation-container">
                <header>
                    <form id="todo-form" onSubmit={this.addItem}>
                        <input 
                        type="text" 
                        placeholder="enter todo"
                        value={this.state.currentItem.text}
                        onChange={this.handleInput} />
                        <button type="submit">Add</button> 
                    </form>
                </header>  
                <ListItem 
                items={this.state.items} 
                deletItem={this.deletItem} 
                setUpdate={this.setUpdate}
                />
            </div>
        )
    }
}

export default TodoAnimationContainer;
