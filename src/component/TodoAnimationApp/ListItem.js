import React, { Component } from 'react'
import  './todo-animation-style.css';
import FlipMove from 'react-flip-move';

class ListItem extends Component {

    render() {
        const listItems = this.props.items.map(item => {
            return <div className="list" key={item.key}>
                <p>
                    <input 
                    type="text" 
                    id={item.key}
                    value={item.text}                 
                    onChange ={(e)=>this.props.setUpdate(e.target.value, item.key)}                       
                    />    
                    <span>
                        <i className="faicon fa fa-trash" 
                        onClick={()=> this.props.deletItem(item.key)} />
                    </span>
                </p>
            </div>
        })
        return (
            <div>
                <FlipMove duration={300} easing="ease-in-out">
                    {listItems}
                </FlipMove>
            </div>
        )
    }
}

export default ListItem;
