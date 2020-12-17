import logo from './logo.svg';
import './App.css';
import Signup from './cmp/Signup';
import Auth from './cmp/Auth';
import SignUpEmail from './cmp/SignUpEmail';
import Auth2factor from './cmp/Auth2factor';
import Navigation from './cmp/Navigation';
import Footerlinks from './cmp/Footerlinks';
import Githublogin from './cmp/Githublogin';
import Step2login from './cmp/Step2login';
import Verifycode from './cmp/Verifycode';
import Creditcard from './cmp/Creditcard';
import Forget from './cmp/Forget';
import Thankyou from './cmp/Thankyou';
import Paymentmethod from './cmp/Paymentmethod';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const mystyle = {
    padding: "5px 10px",
    textDecoration: "none",
    listStyle: "none"
    
  };
  return (
    <div className="App">
      <Router basename = {'/Cobolt'}>

      <div>
        <Navigation />
      

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Signup">
            <Signup name="Create your Account" />
          </Route>
          <Route path="/Auth2factor">
            <Auth2factor name="2-Factor Authentication" />
          </Route>
          <Route path="/SignUpEmail">
            <SignUpEmail name="Sign Up With Email"/>
          </Route>
          <Route path="/Navigation">
            <Navigation />
          </Route>
          <Route path="/Footerlinks">
            <Footerlinks />
          </Route>
          <Route path="/Githublogin">
            <Githublogin />
          </Route>
          <Route path="/Step2login">
            <Step2login name="Sign into your account below" />
          </Route>
          <Route path="/Verifycode">
            <Verifycode name="Verify it's you" />
          </Route>
          <Route path="/Forget">
            <Forget name="Forget Password?" />
          </Route>
          <Route path="/Thankyou">
            <Thankyou name="Thank you for Signing Up" />
          </Route>
          <Route path="/Paymentmethod">
            <Paymentmethod name="Add a Payment method to your account" />
          </Route>
          <Route path="/Creditcard">
            <Creditcard name="Add a Payment detailsto your account" />
          </Route>
          <Route path="/">
            <Auth name="Sign In" />
          </Route>
        </Switch>
      </div>
    </Router>
    
    </div>
  );
 
}

export default App;
