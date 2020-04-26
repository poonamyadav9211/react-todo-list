import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../style.css'

class Navbar extends Component {
    render() {
        return (
            <nav className="nav">
                <h3><Link to="/" >Logo</Link></h3>
                    <ul>
                        <li><Link to="/simpletodo">Todo simple app</Link></li>
                        <li><Link to="/bootstrapodo">Todo with bootstrap</Link></li>
                        <li><Link to="/animationtodo">Todo with Animation</Link></li>
                    </ul>
            </nav>
           )
    }
}

export default Navbar;
