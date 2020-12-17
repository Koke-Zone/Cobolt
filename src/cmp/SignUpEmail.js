import React, { Component } from 'react';
import { BiUser } from "react-icons/bi";
import SignIn from '../assets/images/Sign-In-Logo.png';
import { Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

class SignUpEmail extends Component{
    login(){
        alert('Login Enabled');
    }
    render() {
        return (
            <div className="main"> 
                <div className="container-box flex-ns flex-wrap-ns tl items-center-ns justify-around flex-row-ns">
                    <div className="box2 pa3">
                        <h3>Welcome to</h3>
                        <h1>cobolt</h1>
                    </div>
                    <div className="box3">
                        <div className="logo">
                            <img src={SignIn} alt="Cobolt-logo" width='150px' height='50px' />
                        </div>
                        <div className="LoginForm">
                            <h3> <span> < BiUser/> </span> { this.props.name }</h3>
                            <form>
                                <div className="fields flex-ns flex-wrap-ns flex-row-ns">
                                    <div className="field-box">
                                        <div className="form-group signin-form-user">
                                            <Form.Label htmlFor="username">Username</Form.Label>
                                            <Form.Control type="text" className="form-control form-control-lg" variant="outlined" id="user" placeholder="Name Here" />
                                        </div> 
                                    </div>
                                    <div className="field-box">
                                        <div className="form-group signin-form-pass">
                                            <Form.Label htmlFor="email">Email</Form.Label>
                                            <Form.Control type="email" className="form-control form-control-lg" id="email" placeholder="Enter your email" />
                                        </div>
                                    </div>
                                </div>
                                    <div className="fields flex-ns flex-wrap-ns flex-row-ns">
                                        <div className="field-box">
                                            <div className="form-group signin-form-pass">
                                                <Form.Label htmlFor="password">Password</Form.Label>
                                                <Form.Control type="password" className="form-control form-control-lg" id="pass" placeholder="Create a password" />
                                            </div>
                                        </div>
                                        <div className="field-box">
                                        </div>
                                    </div>
                                <div className="form-group form-group btn-block mt-4 mb-4 pl-1 col-md-8 col-sm-12 col-xs-12">
                                    <Button type="button" variant="primary" onClick={()=>this.login()} className="btn btn-primary btn-lg btn-block login-btn">Login</Button>
                                </div>
                            </form>
                        </div>
                        <div className="account-sign-up-email">
                            <span>By signing up you agree to the</span>
                            <a href="#"> Terms of Service</a> and <a href="#">Privacy Policy</a>
                        </div>
                        <br /><br />
                        <div className="sign-in">
                            <span>Already have an account?</span>
                            <a href="/Auth"> Sign In</a>
                        </div>
                    </div>
                </div>
            </div>   
        )
    }
}

export default SignUpEmail;