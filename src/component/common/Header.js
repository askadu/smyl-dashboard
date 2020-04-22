import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Smyl Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav.Link as={Link} to="/cashback">Cashback</Nav.Link>
                <Nav.Link as={Link} to="/Curators">Curators</Nav.Link>
                <Nav.Link as={Link} to="/Payments">Payments</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;