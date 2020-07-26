
import React, { Component } from 'react';
import Popup from "reactjs-popup";
import { Button } from 'react-bootstrap';

class SignInComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            open: false,
            emailid: '' ,
            password: '',
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    openModal() {
        this.setState({ open: true });
    }
    closeModal() {
        this.setState({ open: false });
    }

    handleSubmit(event) {
        event.preventDefault();
        
        let loginPayload = {
            Email: event.target.email.value,
            Password: event.target.password.value
        }
        fetch('https://localhost:5001/api/laundry/GetAvailability?email='+loginPayload.Email+'&password='+loginPayload.Password, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(err => console.log(err.Message))
          this.closeModal()
    }

    render() {
        return (
            <div>
                <Button variant="primary" onClick={this.openModal}> SIGN IN </Button>
                <Popup
                    open={this.state.open}
                    closeOnDocumentClick
                    onClose={this.closeModal}
                >
                    <div class="container">
                        <div id="login-box" >
                                <h1>Sign In</h1>                           
                                <form onSubmit={this.handleSubmit}>
                                    <input type="text" name="email" placeholder="E-mail" />
                                    <input type="password" name="password" placeholder="Password" />
                                    <button>Send data!</button>
                                </form>
                        </div>
                    </div>
                </Popup>
            </div>
        );
    }
}

export default SignInComponent