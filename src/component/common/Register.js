import React, { Component } from 'react';
import './common-style.css';
import {formValid, emailRegx, isTokenExist} from '../BusinessLogic/common'
import { Link, Redirect } from 'react-router-dom';
import {newPostUser} from '../TestApis/ApiTest';

class Register extends Component {
    constructor(props){
        super(props);

        this.state={
            firstName:null,
            lastName:null,
            email:null,
            password:null,
            formErrors:{
                firstName:"",
                lastName:"",
                email:"",
                password:""
            },
            userCreated:false
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const {firstName,lastName,email,password} = this.state;
        const user={
            firstName,
            lastName,
            email,
            password
        };
        if(formValid(this.state)){
            newPostUser(user);
           this.setState({
               userCreated:true
           })
        } 
    }

    handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        let formErrors = this.state.formErrors;
    
        switch(name){
            case "firstName":
                formErrors.firstName = value.length < 3 
                    ? "minimum 3 characters required" 
                    : "";
                break;
            case "lastName":
                formErrors.lastName = value.length < 3
                    ? "minimum 3 characters required" 
                    : "";
                break;
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
        // if(this.state.userCreated){
        //     return <Redirect to="/login" />
        // }
        // if(isTokenExist()){
        //     return <Redirect to="/" />
        // }

        const {formErrors} = this.state;

        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Create Account</h1>   
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="firstnameStyle">
                            <label htmlFor="firstName">First Name</label>
                            <input 
                                type="text" 
                                className={formErrors.firstName.length>0 ? "error" : null} 
                                placeholder="Enter firstname" 
                                name="firstName" 
                                onChange={this.handleChange}
                                autoFocus
                                noValidate />
                            {formErrors.firstName.length>0 && (
                                <span className="errormessage">{formErrors.firstName}</span>
                            )}
                        </div>
                        <div className="lastnameStyle">
                            <label htmlFor="lastName">Last Name</label>
                            <input 
                                type="text" 
                                className={formErrors.lastName.length>0 ? "error" : null} 
                                placeholder="Enter lastname" 
                                name="lastName" 
                                onChange={this.handleChange}
                                noValidate />
                            {formErrors.lastName.length>0 && (
                                <span className="errormessage">{formErrors.lastName}</span>
                            )}
                        </div>
                        <div className="emailStyle">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="text" 
                                className={formErrors.email.length>0 ? "error" : null} 
                                placeholder="Enter email" 
                                name="email" 
                                onChange={this.handleChange}
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
                            <button type="submit">Create Account</button> 
                            <small><Link to="/login"> Already have an account?</Link></small>
                        </div>  
                    </form>
                </div>                
            </div>
        )
    }
}

export default Register
