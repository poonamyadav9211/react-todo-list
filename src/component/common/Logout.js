import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Logout extends Component {
    render() {
        
        if(localStorage.getItem('token') != null){
            console.log('logout');
            localStorage.removeItem('token'); 
            window.location.reload(false)           
        }
        
        return (
            <div>
                <h3>You are loged out!! <Link to="/login">Login</Link> again.</h3>                
            </div>
        )
    }
}
