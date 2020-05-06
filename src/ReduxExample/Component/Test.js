import React, { Component } from 'react'
import { connect } from 'react-redux';
import { AddText, DeleteText, EditText} from '../Redux/Actions/testAction';

class Test extends Component {
    constructor(){
        super();
        this.inputRef = React.createRef();
        this.state={
            text:'',
            item:{
                id:'',
                name:''
            }
        }
    }
    
    handleChange = (e)=>{
        this.setState({
            text:e.target.value
        });
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const item={
            id:parseInt(this.props.state.items.length) +1,
            name: this.state.text
        }

        this.props.AddText(item);

        this.setState({
            text:''
        });
        this.inputRef.current.focus();
    }

    handleDelete=(id)=>{
        //// get index from array using 'id'
        const index = this.props.state.items.findIndex(x => x.id === id)
        //// using splice method with 'index'
        this.props.DeleteText(index);
        //// using filter method with 'id'
        // this.props.DeleteText(id);
    }

    handleEdit = (id) =>{
        //const item = this.props.state.items.find(item=> item.id == id);       
        const item={
            id:2,
            name:'poonam yadav'
        }
        this.props.EditText(id, item)
        console.log(this.props.state.items)
         
    }

    render() {
        return (
            <div>
                <h1>Test Application!!</h1>
                {console.log('item: ',this.props.state)}
                <input type="text" ref={this.inputRef} name="text" value={this.state.text} onChange={this.handleChange} />
                <button type="submit" onClick={this.handleSubmit} >Save</button>
                    <ul>
                        {
                            this.props.state.items.map(item=>{
                               return <li key={item.id}>{item.name} 
                                <span style={{marginLeft:'20px', color:'red', cursor:'pointer'}} onClick={()=>this.handleDelete(item.id)}>X</span>
                                <span style={{marginLeft:'20px', color:'red', cursor:'pointer'}} onClick={()=>this.handleEdit(item.id)}>+</span>
                               </li> 
                               
                            })
                        }
                    </ul>
                
            </div>
        )
    }
}

const mapStateToProps = state =>({
    state: state.testState
});

const mapDispatchToProps = (dispatch) => ({
    AddText: (item) => dispatch(AddText(item)),
    DeleteText: (id) => dispatch(DeleteText(id)),
    EditText: (id, item) => dispatch(EditText(id, item))
});

export default connect(mapStateToProps, mapDispatchToProps) (Test);