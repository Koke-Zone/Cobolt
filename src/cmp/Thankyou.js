import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
import logo from './../assets/images/logo.png';
import 'tachyons';
import { IoIosArrowDropright } from "react-icons/io";

class Forget extends Component{
    render(){
        return(
            <div className="git-mainpage cover">
            <div className="row">
                <div className="col-md-6 offset-md-3 bg-white br3 pt5">
                    <div className="logo">
                        <img src={logo} alt="logo" className=" bg-white-90" width="150" />
                    </div>
                    <div className="git-text pa2 black-50 fw5">
                        <h3>{this.props.name}</h3>
                        <p className="pr2 pl2 pt2 fw5 black-50">Please click the link in the email we just sent to<br /><span><Link to="/">info@youremail.com</Link></span> <IoIosArrowDropright className="blue"/></p>
                    </div>
                    <form className="w-60" style={{margin: "60px auto 40px"}}>
                        <div className="form-group btn-block git-btton">
                            <Button type="button" className="btn-lg btn-block login-btn-github br3 ttu">Resend Verification Email</Button>
                        </div> 
                    </form>
                </div>
            </div>
        </div> 
        )
    }
}
export default Forget;