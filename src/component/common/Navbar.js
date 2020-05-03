import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../style.css'
import { isTokenExist } from '../BusinessLogic/common';

class Navbar extends Component {    
    render() {
        return (
            <nav className="nav">
                <h2><Link to="/" >Logo</Link></h2>
                    <ul>
                        {/* <li><Link to="/simpletodo">Simple app</Link></li>
                        <li><Link to="/bootstrapodo">With bootstrap</Link></li>
                        <li><Link to="/animationtodo">With Animation</Link></li>*/}
                        <li><Link to="/reduxregister">Redux-Registration</Link></li>
                        <li><Link to="/reduxlogin">Redux-Login</Link></li>
                        {/* {                            
                        isTokenExist()
                            ? <li><Link to="/logout">Logout</Link></li>
                            : <li><Link to="/login">Login</Link></li>
                        } */}
                       
                    </ul>
            </nav>
           )
    }
}

export default Navbar;
