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
    console.log("Loin credencials: ",email,password)
        // const user = {
        //     email:"poonam.yadav9211@gmail.com",
        //     password:"poy@10"
        // };

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
        console.log('--------loginToken---: ',loginToken);
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
        console.log('user: ',user)
        const email="email@gmail.com";
        const password="pass@123";
        fetch('http://localhost:5000/api/post_user/',{
            method: "POST",
            body:JSON.stringify({user}),
            headers:{
                "Authrization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InBvb25hbSIsImVtYWlsIjoicG9vbmFtQGdtYWlsLmNvbSJ9LCJpYXQiOjE1ODgwNjg0MDl9._RUJhJZE-5q3iJoCSNZ-90nULD__5kPdk44JK6LXLFw"
            }
        })
        .then(res => res.json())
        .then(data=> {
            // this.setState({
            //     apiCall : data.message
            // })

            console.log('data: ',data)
        })
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
    var myemail='';
        fetch('http://localhost:5000/api/login/',{
            method:"POST",
            body:JSON.stringify({user:{email, password}})
        })
        .then(res => res.json())
        .then(data=> {
            console.log(data.token)
            localStorage.setItem('token',data.token);
            localStorage.setItem('user1',data.user);                
        });
    }

export default ApiTest


