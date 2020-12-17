import React, { Component } from 'react';
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { GoDeviceMobile } from "react-icons/go";
import SignIn from '../assets/images/Sign-In-Logo.png';
import { Form, Button } from "react-bootstrap";

class Factor extends Component{
    login(){
        alert('Login Enabled');
    }
    render() {
        return (
            <div className="main-factor"> 
                <div className="container-box flex-ns flex-wrap-ns tl items-center-ns justify-around flex-row-ns">
                    <div className="box2 pa3">
                        <h3>Welcome Back to</h3>
                        <h1>cobolt</h1>
                    </div>
                    <div className="box3">
                        <div className="logo">
                            <img src={SignIn} alt="Cobolt-logo" width='150px' height='50px' />
                        </div>
                        <div className="LoginForm">
                            <h3> <span> < GoDeviceMobile/> </span> { this.props.name }</h3>
                            <form>
                                <div className="fields flex-ns flex-wrap-ns flex-row-ns">
                                    <div className="field-box">
                                        <div className="form-group signin-form-user">
                                            <Form.Label htmlFor="username" className="user_label">What phone do you want to use?</Form.Label>
                                            <Form.Control type="email" className="form-control form-control-lg" id="user-auth" placeholder="Name Here"/>
                                        </div> 
                                    </div>
                                </div>
                                <div className="form-group signin-form-factor">
                                    <p className="mt-4 black-30 p-0 fw4 ml-2">How do you want to get codes?</p>
                                </div> 
                                <div className="radios flex-ns flex-wrap-ns flex-row-ns">
                                        <div className="radio-icons items-center-ns">
                                            <div className="col-md-1 col-sm-6 col-xs-12 ">
                                                <Form.Control type="radio" name="optradio" defaultChecked  />
                                            </div>
                                            <div className="col-md-11 col-sm-12 col-xs-12 icon tc">
                                                <span> < FaEnvelope/> </span><br />
                                                <h5>Text message</h5>
                                            </div>
                                        </div>
                                        <div className="radio-icons items-center-ns">
                                            <div className="col-md-1 col-sm-6 col-xs-12 ">
                                                <Form.Control type="radio" name="optradio" /> 
                                            </div>
                                            <div className="col-md-11 col-sm-12 col-xs-12 icon tc">
                                                <span> < FaPhoneAlt/> </span>
                                                <h5>Phone Call</h5>
                                            </div>
                                        </div>
                                </div>
                                <div className="form-group form-group btn-block mt-4 mb-4 pl-1 col-md-8 col-sm-12 col-xs-12">
                                    <Button className="btn btn-primary btn-lg btn-block login-btn-next pa3 mb5">Next</Button>
                                </div>
                            </form>
                             
                        </div>
                       
                    </div>
                </div>
            </div> 
        )
    }
}

export default Factor;