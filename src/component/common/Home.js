import React, { Component } from 'react'
import { isTokenExist } from '../BusinessLogic/common'
import { Redirect } from 'react-router-dom'
import ApiTest from '../TestApis/ApiTest'


const getApi=new ApiTest().getApi;
const getToken=new ApiTest().getToken;
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            mydata:'',
            token:'',
            users:[]
        }
    }
    getApiData = () => {
      getApi().then(a=>{
          this.setState({
              token:a.message
          });
      })
     //return message;
    }

    getLoginData = () => {
        const email = "poonam.yadav9211@gmail.com";
        const password = "poy@10";
        getToken(email,password).then(a=>{
            this.setState({
                token:a.token
              });
        })
       //return message;
      }

    render() {
        console.log('message: ', this.state.mydata);
        console.log('token: ', this.state.token);
        if(isTokenExist()){
                return (
                    <div>
                        Home - Todo App
                        {this.state.mydata}
                        <hr />
                        <ApiTest />
                        <button type="button" onClick={this.getApiData} >Get Api</button> 
                        <button type="button" onClick={this.getLoginData} >Get Login Token</button> 
                        <button type="button" onClick={this.getLoginData} >Add user</button> 
                    </div>
                )
        }
        else{
            return <Redirect to="/login" />
        }
    }
}

export default Home;