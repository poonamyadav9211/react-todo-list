import React, { Component } from 'react'
import { isTokenExist } from '../BusinessLogic/common'
import { Redirect } from 'react-router-dom'

class Home extends Component {
    render() {
        if(isTokenExist()){
                return (
                    <div>
                        Home - Todo App
                    </div>
                )
        }
        else{
            return <Redirect to="/login" />
        }
    }
}

export default Home;