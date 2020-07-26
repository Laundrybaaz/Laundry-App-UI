import React, { Component } from 'react';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap'
import SignUpComponent from '../SignUp/SignUpComponent'
import logo from '../../../laundry.svg'
import SignInComponent from '../SignIn/SignInComponent';
class navbar extends Component {

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />{'    '}
                    <span id="Logo">LaundryBaaz</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Nav.Link href="#home">Clothes</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <SignInComponent/>
                        <SignUpComponent />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default navbar;