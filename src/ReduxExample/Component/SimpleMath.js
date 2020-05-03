import React, { Component } from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from '../Redux/Actions/counterActions';


class SimpleMath extends Component {
    constructor(props){
        super(props);
    }

    onIncreament = () => { 
        this.props.increment();
    }

    onDecreament = () => {
        this.props.decrement()
    }

    render() {
        console.log(this.props.state.counter)
        return (
            <div style={{margin:'50px 0px 0px 400px'}}>
                <div style={{border:'1px solid black', width:'50%', margin:'50px'}}>
                    <h3>Counter</h3>
                    <div >
                        <button onClick={this.onIncreament} style={{margin:'10px'}}>+</button>
                        {this.props.counter}
                        <button onClick={this.onDecreament} style={{margin:'10px'}}>-</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    state,
    counter: state.counter
});

const mapDispatchToProps = (dispatch) => ({
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement())
});

export default connect(mapStateToProps,mapDispatchToProps) (SimpleMath);