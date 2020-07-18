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

                                <input type="text" name="username" placeholder="Username" />
                                <input type="text" name="email" placeholder="E-mail" />
                                <input type="password" name="password" placeholder="Password" />
                                <input type="password" name="password2" placeholder="Retype password" />

                                <input type="submit" name="signup_submit" value="Sign me up" />
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