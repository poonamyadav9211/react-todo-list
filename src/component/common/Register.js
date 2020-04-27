import React, { Component } from 'react';
import './common-style.css';

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
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const {firstName,lastName,email,password} = this.state;

        if(formValid(this.state)){
            console.log('firstName: ',firstName,' lastname: ',lastName,' email: ',email,' password: ',password)
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
        }, () =>{console.log(this.state)})
    }

    render() {
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
                            <small>Already have an account?</small>
                        </div>  
                    </form>
                </div>                
            </div>
        )
    }
}

export default Register
