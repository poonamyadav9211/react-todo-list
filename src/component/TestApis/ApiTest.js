import React, { Component } from 'react'


class ApiTest extends Component {
    constructor(){
        super();

        this.state = {
            apiCall :'',
            user:''
        }
    }

   getApi = () => {
    let newdata ='';
     newdata= fetch('http://localhost:5000/api/',{
            method: "GET"
        })
        .then(res => res.json())
        .then(data=> {
            return data
        });
    return newdata;
    }

    getToken = (email, password) =>{
        let loginToken = fetch('http://localhost:5000/api/login/',{
            method:"POST",
            body:JSON.stringify({user:{email:"poonam@gmail.com", password:"poonam@10"}})
        })
        .then(res => res.json())
        .then(data=> {
            this.setState({
                apiCall : data.token,
                user:data.user
            });
            return data;
        });
        return loginToken
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

    postUser = (user) =>{
        fetch('http://localhost:5000/api/post_user/',{
            method: "POST",
            body:JSON.stringify({user}),
            headers:{
                "Authrization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InBvb25hbSIsImVtYWlsIjoicG9vbmFtQGdtYWlsLmNvbSJ9LCJpYXQiOjE1ODgwNjg0MDl9._RUJhJZE-5q3iJoCSNZ-90nULD__5kPdk44JK6LXLFw"
            }
        })
        .then(res => res.json())
        .then(data=> {
            return data;
        });
    }


    render() {
        const user ={
            id:1,
            email:"email@emal1.com",
            password:"pass@10"
        }
        return (
            <div>
                <button type="button" onClick={this.getApi} >Get Api</button>
                <button type="button" onClick={this.getToken} >Get Token</button>
                <button type="button" onClick={this.getUser} >Get User</button>
                <button type="button" onClick={()=>this.postUser(user)} >Post User</button>
                <br /><hr />
                {this.state.apiCall}
            </div>
        )
    }
}

export const getTokenByUser = (email, password) => { 
       const getToken= fetch('http://localhost:5000/api/login/',{
            method:"POST",
            body:JSON.stringify({user:{email, password}})
        })
        .then(res => res.json())
        .then(data=> {
            localStorage.setItem('token',data.token);
            localStorage.setItem('isLogin',true);  
            return data;              
        });
        return getToken; 
    }


    export const newPostUser = (user) =>{
        fetch('http://localhost:5000/api/post_user/',{
            method: "POST",
            body:JSON.stringify({user}),
            headers:{
                "Authrization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InBvb25hbSIsImVtYWlsIjoicG9vbmFtQGdtYWlsLmNvbSJ9LCJpYXQiOjE1ODgwNjg0MDl9._RUJhJZE-5q3iJoCSNZ-90nULD__5kPdk44JK6LXLFw"
            }
        })
        .then(res => res.json())
        .then(data=> {
            return data;
        });
    }

export default ApiTest


