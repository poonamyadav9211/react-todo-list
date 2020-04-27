import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
class TodoList extends Component {
    render() {
        const {items, clearList, handleDelet, handleEdit} = this.props;
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">Todo List</h3>
                {
                    items.map(item => {
                        return(
                            <TodoListItem 
                                key={item.id} 
                                title={item.title}
                                handleDelet={() => handleDelet(item.id)}
                                handleEdit={() => handleEdit(item.id)}
                            />
                        )
                    })
                }

                    <button type="button" 
                        style={{display:items.length >0 ? 'block' : 'none'}}
                        className="btn btn-danger btn-block text-capitalize mt-5"
                        onClick={clearList}>
                        clear list
                    </button>
            </ul>
            
        );
    }
}

export default  TodoList;
