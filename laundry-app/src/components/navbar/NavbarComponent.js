import React, { Component } from 'react';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap'
import SignUpComponent from '../LandingPage/SignUp/SignUpComponent'
import SignInComponent from '../LandingPage/SignIn/SignInComponent'
import logo from '../../laundry.svg'
import MensApparel from '../Clothes/MensApparel/MensApparel';
class navbar extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.HomePage = this.HomePage.bind(this);

    }
    handleClick(event) {
        this.props.update(true);
    }
    HomePage(event) {
        this.props.update(false);
    }
    getComponent() {
        console.log("hello")
        if (this.state.showModal) {  // show the modal if state showModal is true
            return <MensApparel/>;
        }
    }
    render() {
        const navbar = (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />{'    '}
                    <span id="Logo" onClick={this.HomePage}>LaundryBaaz</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>

                        <NavDropdown title="Clothes" id="collasible-nav-dropdown dropdown-menu">
                            <NavDropdown.Item href="#action/3.1" id="nav-dropdown" onClick={this.handleClick}>Men</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" id="nav-dropdown">Women</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" id="nav-dropdown">Kids</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <SignInComponent/>
                        <SignUpComponent/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>);

        return navbar;

    }

}

export default navbar;