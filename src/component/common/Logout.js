import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {
    isloginAction, 
    tokenAction
} from '../../ReduxExample/Redux/Actions/authAction';

class Logout extends Component {
    render() {
        
        if(localStorage.getItem('token') != null){
            localStorage.removeItem('token'); 
            //window.location.reload(false)   
            this.props.isloginAction(false);        
        }
        
        return (
            <div>
                <h3>You are loged out!! <Link to="/login">Login</Link> again.</h3>                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        isloginAction: islogin => {
            dispatch(isloginAction(islogin))
          }
    }
};

export default connect(null, mapDispatchToProps)(Logout)
