import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

class Signup extends Component{
  
    render() {
        return (
            <nav>
            <ul className="flex-ns bg-gray flex-wrap-ns justify-center ma0 flex-row-ns">
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/Signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/SignUpEmail">Sign Up With Email</Link>
              </li>
              <li>
                <Link to="/Auth2factor">2 Factor Authentication</Link>
              </li>
              <li>
                <Link to="/Githublogin">Github-Login</Link>
              </li>
              <li>
                <Link to="/Step2login">Step2-Login</Link>
              </li>
              <li>
                <Link to="/Verifycode">Verify it's you</Link>
              </li>
              <li>
                <Link to="/Thankyou">Thank you</Link>
              </li>
              <li>
                <Link to="/Paymentmethod">Pay method</Link>
              </li>
            </ul>
          </nav>
        )
    }
}

export default Signup;