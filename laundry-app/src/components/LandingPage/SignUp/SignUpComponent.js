import React, { Component } from 'react';
import Popup from "reactjs-popup";
import { Button } from 'react-bootstrap';
import './SignUp.css'
class SignUpComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
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

                                <button class="social-signin facebook">Log in with facebook</button>
                                <button class="social-signin twitter">Log in with Twitter</button>
                                <button class="social-signin google">Log in with Google+</button>
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