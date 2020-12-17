import React, { Component } from 'react';
import { FaGithub, FaGoogle, FaUserAlt } from 'react-icons/fa';
import { BiUser,BiEnvelope } from "react-icons/bi";
import SignIn from '../assets/images/Sign-In-Logo.png';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link } from 'react-router-dom';

class Signup extends Component{
    login(){
        alert('Login With Email');
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
                            <p>And start spending more time on your projects and less time managing your infrastructure</p>
                            {/* <form>
                                <div className="fields flex-ns flex-wrap-ns flex-row-ns">
                                    <div className="field-box">
                                        <div className="form-group signin-form-user">
                                            <Form.Label htmlFor="username">Username</Form.Label>
                                            <Form.Control type="email" className="form-control form-control-lg" id="user" placeholder="Name Here" />
                                        </div> 
                                    </div>
                                    <div className="field-box">
                                        <div className="form-group  signin-form-pass">
                                            <Form.Label htmlFor="password">Password</Form.Label>
                                            <Form.Control type="password" className="form-control form-control-lg" id="pass" placeholder="*****" />
                                        </div>
                                        <div className="tl"><Link to="/Forget">Forget Password?</Link></div>
                                    </div>
                                </div> */}
                                <div className="form-group form-group btn-block mt-4 mb-4 pl-1 col-md-8 col-sm-12 col-xs-12">
                                    <Button type="button" variant="primary" className="btn btn-primary btn-lg btn-block login-btn"><BiEnvelope/>Sign up with email</Button>
                                </div>
                            {/* </form> */}
                                <div className="form-group btn-block col-md-8 col-sm-12 pl-1 col-xs-12">
                                    <Button onClick={()=>this.login2()} className="btn btn-primary btn-lg btn-block login-btn-google"><FaGoogle/>Sign up with google</Button>
                                </div>
                                <div className="form-group btn-block col-md-8 col-sm-12 pl-1 col-xs-12">
                                    <Button onClick={()=>this.login()} className="btn btn-primary btn-lg btn-block login-btn-git">< FaGithub/> Sign up with github</Button>
                                </div>
                        </div>
                        <div className="account-sign-up">
                            <span>By signing up you agree to the </span><br />
                            <Link href="/">Terms of Service </Link>and <Link href="/">Privacy Policy</Link>
                        </div>
                        <br />
                        <div className="sign-in">
                            <span>Already have an account?</span>
                            <Link href="/Auth"> Sign In</Link>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Signup;