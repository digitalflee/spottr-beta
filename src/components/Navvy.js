import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

export class Navvy extends Component {
    render() {
        return (
            <div>

        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
            SPOTTR
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Link to="/user-profile" style={{ color: '#000' }}>My Profile</Link>
             <span>' '</span>
            <Link to="/gym-map" style={{ color: '#000' }}>Find Gyms</Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
                
            </div>
        )
    }
}

export default Navvy
