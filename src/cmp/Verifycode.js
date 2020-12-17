import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
import logo from './../assets/images/logo.png';
import 'tachyons';

class Verifycode extends Component{
    render(){
        return(
            <div className="git-mainpage cover">
                <div className="row">
                    <div className="col-md-6 offset-md-3 bg-white br3 justify-center pt5">
                        <div className="logo">
                            <img src={logo} alt="logo" className=" bg-white-90" width="150" />
                        </div>
                        <div className="git-text pa2 black-60 fw5">
                            <h3>{this.props.name}</h3>
                            <p className="pr5 pl5 black-50">We sent a verification code to your email. Enter the code from the email in the field below</p>
                        </div>
                        <form className="w-70 dib">
                            <div className="form-group tl b">
                                <Form.Label htmlFor="password" className="black-50 fw5">6-digit code</Form.Label>
                                <Form.Control type="password" className="form-control form-control-lg" id="pass" placeholder="Name Here" />
                            </div>
                            <div className="form-group btn-block git-btton">
                                <Button type="button" className="btn-lg btn-block login-btn-github br3 ttu">Resend Verification Email</Button>
                            </div> 
                        </form>
                        <div className="w-80 dib ma3 pb3">
                            <b className="black-60">Need Help?</b><br />
                            <span className="black-50 fw5">Check out our <Link to="/">troubleshooting guide</Link> or <Link to="/">try again</Link></span>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}
export default Verifycode;