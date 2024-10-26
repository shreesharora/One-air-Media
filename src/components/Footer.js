import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import logo from "../assets/img/logo.png"


class Footer extends Component
{
    render() {
        return (
            <footer className="container">
                <div className="row py-5">
                    <div className="col text-center">
                        <img src={logo} alt="one air media" height="50" />
                        <div className="my-2">
                            <a href="https://x.com" className="text-body-secondary fs-4 px-2"><FontAwesomeIcon icon={faXTwitter} /></a>
                            <a href="https://x.com" className="text-body-secondary fs-4 px-2"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://x.com" className="text-body-secondary fs-4 px-2"><FontAwesomeIcon icon={faYoutube} /></a>
                            <a href="https://x.com" className="text-body-secondary fs-4 px-2"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                    </div>
                    <div className="col">
                    <h5>Explore</h5>
                        <Nav className="flex-column">
                            <Nav.Link className="text-body-secondary px-0 py-1" href="#pricing">Let's Create</Nav.Link>
                            <Nav.Link className="text-body-secondary px-0 py-1" href="#pricing">Let's Stream</Nav.Link>
                            <Nav.Link className="text-body-secondary px-0 py-1" href="#pricing">Subscribe</Nav.Link>
                        </Nav>
                    </div>
                    <div className="col">
                        <h5>Resources</h5>
                        <Nav className="flex-column">
                            <Nav.Link className="text-body-secondary px-0 py-1" href="#pricing">About Us</Nav.Link>
                            <Nav.Link className="text-body-secondary px-0 py-1" href="#pricing">Contact Us</Nav.Link>
                        </Nav>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer