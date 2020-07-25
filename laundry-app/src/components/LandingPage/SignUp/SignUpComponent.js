import React, { Component } from 'react';
import Popup from "reactjs-popup";
import { Button } from 'react-bootstrap';
import './SignUp.css';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
class SignUpComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.responseGoogle = this.responseGoogle.bind(this);
        this.responseFacebook = this.responseFacebook.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    responseGoogle = (response) => {
        console.log(response);
    }
    responseFacebook = (response) => {
        console.log(response);
    }
    openModal() {
        this.setState({ open: true });
    }
    closeModal() {
        this.setState({ open: false });
    }
    handleSubmit(event){
        event.preventDefault();
        
        let registerPayload = {
            FirstName: event.target.firstname.value,
            LastName: event.target.lastname.value,
            Email: event.target.email.value,
            Address: event.target.address.value,
            Password: event.target.password.value
        }
        console.log(registerPayload)
       /* const form = event.target;
        const data = new FormData(form);
    
        for (let name of data.keys()) {
          const input = form.elements[name];
          const parserName = input.dataset.parse;
    
          if (parserName) {
            const parser = inputParsers[parserName];
            const parsedValue = parser(data.get(name));
            data.set(name, parsedValue);
          }
        }
        */
        fetch('https://localhost:5001/api/laundry/SignUp', {
          method: 'POST',
          body: JSON.stringify(registerPayload),
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-type': 'application/json'
          }
        })
        .then(data => console.log(data))
        .catch(err => console.log(err.Message))
        this.closeModal()
    }

    render() {
        return (
            <div>
                <head><script src="https://apis.google.com/js/platform.js" async defer></script>
                    <meta name="google-signin-client_id" content="970592329073-5r0bs93hmd177h91mm4oh58pbsmvdu4n.apps.googleusercontent.com" />
                </head>
                <Button variant="success" onClick={this.openModal}> SIGN UP </Button>
                <Popup
                    open={this.state.open}
                    closeOnDocumentClick
                    onClose={this.closeModal}
                >
                    <div class="container">
                        <div id="login-box">
                            <div class="left">
                                <h1>Sign up</h1>
                                <form onSubmit={this.handleSubmit}>
                                    <input type="text" name="firstname" placeholder="First Name" />
                                    <input type="text" name="lastname" placeholder="Last Name" />
                                    <input type="text" name="email" placeholder="E-mail" />
                                    <input type="text" name="address" placeholder="Address" />
                                    <input type="password" name="password" placeholder="Password" />
                                    <input type="password" name="password2" placeholder="Retype password" />
                                    <button>Send data!</button>
                                </form>
                            </div>

                            <div class="right">
                                <span class="loginwith">Sign in with<br />social network</span>

                                <FacebookLogin
                                    appId="1662287657280904"

                                    callback={this.responseFacebook}
                                    render={renderProps => (
                                        <button class="social-signin facebook" onClick={renderProps.onClick}>Log in with Facebook</button>
                                    )}
                                />
                                <button class="social-signin twitter">Log in with Twitter</button>

                                <GoogleLogin
                                    clientId="970592329073-5r0bs93hmd177h91mm4oh58pbsmvdu4n.apps.googleusercontent.com"
                                    render={renderProps => (
                                        <button class="social-signin google" onClick={renderProps.onClick} disabled={renderProps.disabled}>Log In with Google</button>
                                    )}
                                    buttonText="Login"
                                    onSuccess={this.responseGoogle}
                                    onFailure={this.responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />
                            </div>
                            <div class="or">OR</div>
                        </div>
                    </div>
                </Popup>
            </div>
        );
    }
}

export default SignUpComponent;