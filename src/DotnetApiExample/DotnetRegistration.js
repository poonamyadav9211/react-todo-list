import React, { Component } from 'react';
import '../component/common/common-style.css';
import {
    formValid, 
    emailRegx, 
    isTokenExist} 
from '../component/BusinessLogic/common';
import { Link, Redirect } from 'react-router-dom';
import { newPostUser } from '../component/TestApis/ApiTest';
import {
    firstNameAction, 
    lastNameAction,
    emailAction,
    passwordAction,
    firstNameErrorAction,
    lastNameErrorAction,
    emailErrorAction,
    passworErrordAction,
    isUserCreatedAction
} from '../ReduxExample/Redux/Actions/userAction'

import { connect } from 'react-redux';
import { addAuthUser, getAuthUserById } from './Actions/actionCreator';

class DotnetRegistration extends Component {
    handleSubmit = e => {
        e.preventDefault();
        const {firstname,lastname,email,password} = this.props.user.users;       
        const user={
            firstname,
            lastname,
            email,
            password,
            isactive: false
        };

        console.log(user)

        this.props.addAuthUser(user)

        if(formValid({formErrors:this.props.userError})){
            //newPostUser(user);
            this.props.isUserCreatedAction(true);
        }
    }

    handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        let firstNameError='';
        let lastNameError='';
        let emailError='';
        let passwordError='';

        switch(name){
            case "firstName":
                this.props.firstNameAction(value)
                firstNameError = value.length < 3 
                    ? "minimum 3 characters required" 
                    : "";
                this.props.firstNameErrorAction(firstNameError)
                break;
            case "lastName":
                this.props.lastNameAction(value)
                lastNameError = value.length < 3
                    ? "minimum 3 characters required" 
                    : "";
                this.props.lastNameErrorAction(lastNameError)
                break;
            case "email":
                this.props.emailAction(value)
                emailError = emailRegx.test(value)
                    ? "" 
                    : "Invalid email address";    
                this.props.emailErrorAction(emailError)  
                break;        
            case "password":
                this.props.passwordAction(value)
                passwordError = value.length < 6
                    ? "minimum 6 characters required" 
                    : "";
                this.props.passworErrordAction(passwordError)
                break;
            default:
                break;
        }
    }

    render() {
        // if(this.props.userCreatedState){
        //     return <Redirect to="/reduxlogin" />
        // }
        // if(isTokenExist()){
        //     return <Redirect to="/" />
        // }
       
        const {firstname, lastname, email, password} = this.props.userError

        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Create Account</h1>   
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="firstnameStyle">
                            <label htmlFor="firstName">First Name</label>
                            <input 
                                type="text" 
                                className={firstname.length>0 ? "error" : null} 
                                placeholder="Enter firstname" 
                                name="firstName" 
                                onChange={this.handleChange}
                                autoFocus
                                noValidate />
                            {firstname.length>0 && (
                                <span className="errormessage">{firstname}</span>
                            )}
                        </div>
                        <div className="lastnameStyle">
                            <label htmlFor="lastName">Last Name</label>
                            <input 
                                type="text" 
                                className={lastname.length>0 ? "error" : null} 
                                placeholder="Enter lastname" 
                                name="lastName" 
                                onChange={this.handleChange}
                                noValidate />
                            {lastname.length>0 && (
                                <span className="errormessage">{lastname}</span>
                            )}
                        </div>
                        <div className="emailStyle">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="text" 
                                className={email.length>0 ? "error" : null} 
                                placeholder="Enter email" 
                                name="email" 
                                onChange={this.handleChange}
                                noValidate />
                            {email.length>0 && (
                                <span className="errormessage">{email}</span>
                            )}
                        </div>
                        <div className="passwordStyle">
                            <label htmlFor="password">password</label>
                            <input 
                                type="password" 
                                className={password.length>0 ? "error" : null} 
                                placeholder="Enter password" 
                                name="password" 
                                onChange={this.handleChange}
                                noValidate />
                            {password.length>0 && (
                                <span className="errormessage">{password}</span>
                            )}
                        </div>  
                        <div className="createAccount">
                            <button type="submit">Create Account</button> 
                            <small><Link to="/dotnetlogin"> Already have an account?</Link></small>
                        </div>  
                    </form>
                </div>                
            </div>
        )
    }
}


const mapStateToProps = state =>({
    user: state.userState,
    userError: state.userState.usersError,
    userCreatedState: state.userState.isUserCreated,
    authusers: state.authUserState.authUserOps
});

const mapDispatchToProps = (dispatch) => {
    return {
        firstNameAction: firstName => {
            dispatch(firstNameAction(firstName))
        },
        lastNameAction: lastName => {
            dispatch(lastNameAction(lastName))
        },
        emailAction: email => {
            dispatch(emailAction(email))
        },
        passwordAction: password => {
            dispatch(passwordAction(password))
        },
        firstNameErrorAction: firstnameerror => {
            dispatch(firstNameErrorAction(firstnameerror))
        },
        lastNameErrorAction: lastnameerror => {
            dispatch(lastNameErrorAction(lastnameerror))
        },
        emailErrorAction: emailerror => {
            dispatch(emailErrorAction(emailerror))
        },
        passworErrordAction: passworderror => {
            dispatch(passworErrordAction(passworderror))
        },
        isUserCreatedAction: isusercreated => {
            dispatch(isUserCreatedAction(isusercreated))
        },
        addAuthUser: user => {
            dispatch(addAuthUser(user))
        }
        
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DotnetRegistration)

