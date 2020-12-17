import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
import logo from './../assets/images/logo.png';
import paypal from './../assets/images/paypal.png';
import 'tachyons';
import { FiCreditCard } from "react-icons/fi";

class Paymentmethod extends Component{
    render(){
        return(
            <div className="git-mainpage cover">
            <div className="row">
                <div className="col-md-6 offset-md-3 bg-white br3 pt4 pb4">
                    <div className="logo">
                        <img src={logo} alt="logo" className=" bg-white-90" width="150" />
                    </div>
                    <div className="git-text pa2 black-70 fw5">
                        <h3>{this.props.name}</h3>
                        <p className="pr5 pl5 pt2 fw5 black-50">We ask for your payment method to verify your identity and to keep spammers out.</p>
                    </div>
                    <form className="dib w-70">
                        <div className="form-group btn-block credit-btton">
                            <Button type="button" className="btn-lg btn-block login-btn-credit br3 ttu"><FiCreditCard className="f3 mr2 ml2 mb1" />Credit card</Button>
                        </div> 
                        <div className="form-group btn-block paypal-btton">
                            <Button type="button" className="btn-lg btn-block login-btn-paypal br3 ttu"><img src={ paypal } alt="paypal" width="140" height="30" /></Button>
                        </div> 
                    </form>
                </div>
            </div>
        </div> 
        )
    }
}
export default Paymentmethod;