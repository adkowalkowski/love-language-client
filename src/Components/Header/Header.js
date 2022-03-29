import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Search</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#pricing">Create Account</Nav.Link>
      <Nav.Link href="#pricing">Login</Nav.Link>
      <Nav.Link href="#pricing">Sign Out</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    )
}

export default Header; 