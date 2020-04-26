import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        return{
            background: '#f4f4f4',
            padding: '5px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed? 'line-through' : 'none',
            width: '40%',
            marginLeft: '450px'
        }
    }

    btnDelStyle = {
        background:'#ff0000',
        color: '#fff',
        border: 'none',
        padding: '5px 9px',
        borderRadius: '50%',
        cursor: 'pointer',
        float: 'right',
        marginRight: '10px'
    }

    btnEditStyle = {
        background:'rgb(97, 192, 202)',
        color: '#fff',
        border: 'none',
        padding: '0px 10px',
        borderRadius: '10%',
        cursor: 'pointer',
        float: 'right',
        marginRight: '10px',
        fontSize: '20px'
    }

    lblStyle = {
        fontSize:'12px', 
        marginLeft:'10px', 
        textDecoration:'none !important'
    }

    render() {
        const {id, title, name } = this.props.todo;
        return (
                <div style={this.getStyle()}>
                    <h4>
                        <input type="checkbox" 
                            onChange={this.props.markComplet.bind(this, id)}
                            checked={this.props.todo.completed? true : false} />
                            <span>{title}</span> 
                            <label 
                            style={this.lblStyle}>Crerated by : {name}</label>
                           
                        <button 
                            style={this.btnDelStyle} 
                            onClick={this.props.delTodo.bind(this,id)}
                        >X</button>
                        <button 
                            style={this.btnEditStyle} 
                            onClick={this.props.editTodo.bind(this,id)}
                        >+</button> 
                    </h4>
                </div>
        )
    }
}



TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}


export default TodoItem