import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Smyl Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav.Link href="#cashback">Cashback</Nav.Link>
                <Nav.Link href="#cashback">Curators</Nav.Link>
                <Nav.Link href="#cashback">Payments</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;