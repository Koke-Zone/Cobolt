import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
import logo from './../assets/images/logo.png';
import 'tachyons';

class Forget extends Component{
    render(){
        return(
            <div className="git-mainpage cover">
                <div className="row">
                    <div className="col-md-6 offset-md-3 bg-white br3 justify-center pt4 pb3">
                        <div className="logo">
                            <img src={logo} alt="logo" className=" bg-white-90" width="150" />
                        </div>
                        <div className="git-text pa2 black-60 fw5">
                            <h3>{this.props.name}</h3>
                            <p className="pr5 pl5 black-50">Enter the email address associated with your account and we will send you a link to reset your password.</p>
                        </div>
                        <form className="dib w-80">
                                <div className="form-group tl b w-90 tc" style={{display:"inherit", margin: "10px auto 10px"}}>
                                    <Form.Control type="email" className="form-control form-control-lg" id="pass" placeholder="Enter Email address" />
                                </div>
                                <div className="form-group btn-block git-btton">
                                    <Button type="button" className="btn-lg btn-block login-btn-github br3 ttu">Request password reset</Button>
                                </div> 
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Forget;