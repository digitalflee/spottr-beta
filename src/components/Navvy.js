import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export class Navvy extends Component {
    render() {
        return (
            <div>

        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">SPOTTR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">My Profile</Nav.Link>
            <Nav.Link href="#link">Find Gyms</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
                
            </div>
        )
    }
}

export default Navvy
