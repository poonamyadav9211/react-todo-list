import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../style.css'
import { connect } from 'react-redux';

class Navbar extends Component {    
    render() {
        return (
            <nav className="nav">
                <h2><Link to="/" >Logo</Link></h2>
                    <ul>
                        {/* <li><Link to="/simpletodo">Simple app</Link></li>
                        <li><Link to="/bootstrapodo">With bootstrap</Link></li>
                        <li><Link to="/animationtodo">With Animation</Link></li> 
                        {     
                        this.props.islogin
                            ? <li><Link to="/logout">Logout</Link></li>
                            : <li><Link to="/reduxlogin">Login</Link></li>
                        }                        */}

                        <li>
                            <Link to="/dotnetapp">Dotnet App</Link>
                        </li>
                    </ul>
            </nav>
           )
    }
}

const mapStateToProps = state =>({
    islogin : state.AuthState.isLogin
});

export default connect(mapStateToProps, null)(Navbar)
