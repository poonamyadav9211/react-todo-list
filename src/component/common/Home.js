import React, { Component } from 'react'
import { isTokenExist } from '../BusinessLogic/common'
import { Redirect } from 'react-router-dom'
import ApiTest from '../TestApis/ApiTest'

class Home extends Component {
    render() {
        if(isTokenExist()){
                return (
                    <div>
                        Home - Todo App
                        <hr />
                        <ApiTest />
                    </div>
                )
        }
        else{
            return <Redirect to="/login" />
        }
    }
}

export default Home;