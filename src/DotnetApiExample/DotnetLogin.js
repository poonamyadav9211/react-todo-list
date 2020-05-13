import React, { Component } from 'react';
import '../component/common/common-style.css';
import { Link } from 'react-router-dom';
import { formValid, emailRegx, isTokenExist } from '../component/BusinessLogic/common';
import { Redirect } from 'react-router-dom';
import { getTokenByUser } from "../component/TestApis/ApiTest";
import { connect } from 'react-redux';
import {
    isloginAction, 
    tokenAction
} from '../ReduxExample/Redux/Actions/authAction';
import {
    emailAction,
    passwordAction,
    emailErrorAction,
    passworErrordAction,
} from '../ReduxExample/Redux/Actions/userAction'
import { getAuthUser, getToken } from './Actions/actionCreator';

class DotnetLogin extends Component {
    handleSubmit = e => {
        e.preventDefault();
        const {email,password} =  this.props.user.users;
        if(this.checkEmptyUser())
        {
            return;
        }
        if(formValid({formErrors:this.props.userError})){
            this.props.getToken(email,password);
        }
    } 

    checkEmptyUser = () => {
        if((this.props.user.users.email === null && this.props.user.users.email === '') 
        || (this.props.user.users.password === null || this.props.user.users.password === '')){
            return true;
        } else {
            return false;
        }
    }

    IsUserLogged = () => {
       return this.props.authusers.authUser==null? false : true;
    }
    
    handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        let emailError='';
        let passwordError='';
            
        switch(name){
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
        const { email, password} = this.props.userError;
        console.log('login: ',this.props.token);
        
        // if(this.IsUserLogged()){
        //     return <Redirect to="/dotnetapp" />
        // }
        // if(isTokenExist()){
        //     return <Redirect to="/" />
        // }
        // if(this.props.islogin==true){
        //     return <Redirect to="/" />
        // } else {

            return (
                <div className="wrapper">
                    <div className="form-wrapper">
                        <h1>Login Account</h1>   
                        <form onSubmit={this.handleSubmit} noValidate>
                        <div className="emailStyle">
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="text" 
                                    className={email.length>0 ? "error" : null} 
                                    placeholder="Enter email" 
                                    name="email" 
                                    onChange={this.handleChange}
                                    autoFocus
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
                                <button type="submit">Login</button> 
                                <small><Link to="/dotnetregister">If don't have an account?</Link></small>
                            </div>  
                        </form>
                    </div>                
                </div>
            )
        }
    }
//}

const mapStateToProps = state =>({
    islogin : state.AuthState.isLogin,
    user: state.userState,
    userError: state.userState.usersError,
    authusers: state.authUserState.authUserOps,
    token: state.authUserState.getUserToken
});

const mapDispatchToProps = (dispatch) => {
    return {
        isloginAction: islogin => {
            dispatch(isloginAction(islogin))
          },
        tokenAction: token => {
            dispatch(tokenAction(token))
        },
        emailAction: email => {
            dispatch(emailAction(email))
        },
        emailErrorAction: emailerror => {
            dispatch(emailErrorAction(emailerror))
        },
        passworErrordAction: passworderror => {
            dispatch(passworErrordAction(passworderror))
        },
        passwordAction: password => {
            dispatch(passwordAction(password))
        },
        getAuthUser: user => {
            dispatch(getAuthUser(user))
        },
        getToken: (username,password) => {
            dispatch(getToken(username,password))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DotnetLogin)
