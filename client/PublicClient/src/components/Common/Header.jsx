import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container fluid={true} className="ms-4 me-4">
        <Navbar.Brand href="#home">
          <h3 className="logo">
            Patient
            <br /> Management
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="fw-bold" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#services">
              Services
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#certificates">
              certificates
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#Testimonials">
              Testimonials
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
          <a className="ms-auto login-link" href="http://localhost:5173/Login">
            Log In
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
