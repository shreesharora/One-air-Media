import React, { Component } from "react";
import { Link } from 'react-router-dom';

import logo from "../assets/img/logo.png"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarToggle from 'react-bootstrap/NavbarToggle'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'


class Header extends Component
{
    render() {
        return (
            <header>
                <Navbar expand="md" bg="dark" data-bs-theme="dark" className="border-bottom border-white py-3">
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="one air media" height="50" />
                    </Navbar.Brand>
                    <NavbarToggle />
                    <NavbarCollapse className="justify-content-md-end">
                        <Nav>
                            <Nav.Link href="#create">Let's Create</Nav.Link>
                            <Nav.Link href="#features">Let's Stream</Nav.Link>
                            <Nav.Link href="#pricing">About Us</Nav.Link>
                            <Nav.Link href="#pricing">Subscribe</Nav.Link>
                            <Nav.Link href="#pricing">Contact Us</Nav.Link>
                        </Nav>
                    </NavbarCollapse>
                </Navbar>
            </header>
        );
    }
}

export default Header