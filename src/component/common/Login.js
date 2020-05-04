import React, { Component } from 'react';
import './common-style.css';
import { Link } from 'react-router-dom';
import {formValid, emailRegx, isTokenExist} from '../BusinessLogic/common';
import {Redirect} from 'react-router-dom';
import { getTokenByUser } from "../TestApis/ApiTest";
class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:null,
            password:null,
            formErrors:{
                email:"",
                password:"",
                isLogin:false
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const {email,password} = this.state;

        if(formValid(this.state)){
            const login= getTokenByUser(email,password);
            const token = login.then(res => {
                this.setState({
                    isLogin:true
                })
                localStorage.setItem('token', res.token);
                //window.location.reload(false);
            });
                
            }
    } 

    handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        let formErrors = this.state.formErrors;
            
        switch(name){
            case "email":
                formErrors.email = emailRegx.test(value)
                    ? "" 
                    : "Invalid email address";      
                break;        
            case "password":
                formErrors.password = value.length < 6
                    ? "minimum 6 characters required" 
                    : "";
                break;
            default:
                break;
        }
    
        this.setState({
            formErrors,[name]:value
        })
    }

    render() {
        const {formErrors} = this.state;
        if(isTokenExist()){
            return <Redirect to="/" />
        }
        if(this.state.isLogin){
            return <Redirect to="/" />
        } else {
            return (
                <div className="wrapper">
                    <div className="form-wrapper">
                        <h1>Login Account</h1>   
                        <form onSubmit={this.handleSubmit} noValidate>
                        <div className="emailStyle">
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="text" 
                                    className={formErrors.email.length>0 ? "error" : null} 
                                    placeholder="Enter email" 
                                    name="email" 
                                    onChange={this.handleChange}
                                    autoFocus
                                    noValidate />
                                {formErrors.email.length>0 && (
                                    <span className="errormessage">{formErrors.email}</span>
                                )}
                            </div>
                            <div className="passwordStyle">
                                <label htmlFor="password">password</label>
                                <input 
                                    type="password" 
                                    className={formErrors.password.length>0 ? "error" : null} 
                                    placeholder="Enter password" 
                                    name="password" 
                                    onChange={this.handleChange}
                                    noValidate />
                                {formErrors.password.length>0 && (
                                    <span className="errormessage">{formErrors.password}</span>
                                )}
                            </div>  
                            <div className="createAccount">
                                <button type="submit">Login</button> 
                                <small><Link to="/register">If don't have an account?</Link></small>
                            </div>  
                        </form>
                    </div>                
                </div>
            )
        }
    }
}

export default Login