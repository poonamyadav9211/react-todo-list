import React, { Component } from 'react';
import './common-style.css';
import { Link } from 'react-router-dom';

const emailRegx = RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
const formValid = ({formErrors, ...rest}) => {
    let valid = true;

    //validate form error being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val == null && (valid = false)
    });

    return valid;
}

class Login extends Component {
    constructor(props){
        super(props);

        
        this.state={
            email:null,
            password:null,
            formErrors:{
                email:"",
                password:""
            }
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        const {email,password} = this.state;

        if(formValid(this.state)){
            console.log(' email: ',email,' password: ',password)
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
        }, () =>{console.log(this.state)})
    }

    render() {
        const {formErrors} = this.state;
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

export default Login