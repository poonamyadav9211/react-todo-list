import React, { Component } from 'react'


export default class ApiTest extends Component {
    constructor(){
        super();

        this.state = {
            apiCall :''
        }
    }

   getApi = () =>{
        fetch('http://localhost:5000/api/',{
            method: "GET"
        })
        .then(res => res.json())
        .then(data=> {this.setState({
            apiCall : data.message
        })})
    }

    getToken = () =>{
        fetch('http://localhost:5000/api/login/',{
            method: "POST"
        })
        .then(res => res.json())
        .then(data=> {
            this.setState({
                apiCall : data.token
            })
        });
    }

    getUser = () =>{
        fetch('http://localhost:5000/api/posts/',{
            method: "POST",
            headers:{
                "Authrization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InBvb25hbSIsImVtYWlsIjoicG9vbmFtQGdtYWlsLmNvbSJ9LCJpYXQiOjE1ODgwNjg0MDl9._RUJhJZE-5q3iJoCSNZ-90nULD__5kPdk44JK6LXLFw"
            }
        })
        .then(res => res.json())
        .then(data=> {
            this.setState({
                apiCall : data.message
            })
        })
    }
    render() {
        return (
            <div>
                <button type="button" onClick={this.getApi} >Get Api</button>
                <button type="button" onClick={this.getToken} >Get Token</button>
                <button type="button" onClick={this.getUser} >Get User</button>
                <br /><hr />
                {this.state.apiCall}
            </div>
        )
    }
}
