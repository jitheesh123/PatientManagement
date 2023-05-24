import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ checkToken, role }) => {
  const navigate = useNavigate();
  return (
    <Navbar
      style={{ marginBottom: '5%' }}
      expand="lg"
      variant="light"
      bg="light"
    >
      <Container fluid={true} className="ms-4 me-4">
        <Navbar.Brand href="#home">
          <h3 className="logo">
            Patient
            <br /> Management
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          {!checkToken ? (
            <>
              <Nav className="ms-auto">
                <Nav.Link className="fw-bold" href="http://localhost:5174/">
                  Home
                </Nav.Link>
                <Nav.Link
                  className="fw-bold"
                  href="http://localhost:5174/#about"
                >
                  About
                </Nav.Link>
                <Nav.Link
                  className="fw-bold"
                  href="http://localhost:5174/#services"
                >
                  Services
                </Nav.Link>
                <Nav.Link
                  className="fw-bold"
                  href="http://localhost:5174/#certificates"
                >
                  certificates
                </Nav.Link>
                <Nav.Link
                  className="fw-bold"
                  href="http://localhost:5174/#Testimonials"
                >
                  Testimonials
                </Nav.Link>
                <Nav.Link
                  className="fw-bold"
                  href="http://localhost:5174/#contact"
                >
                  Contact
                </Nav.Link>
              </Nav>
              <Link className="ms-auto login-link" to="/Login">
                Log In
              </Link>
            </>
          ) : (
            <>
              <Nav className="ms-auto">
                <Link className="text-black fw-bold" to="dashboard">
                  Dashboard
                </Link>
                {role === 'Admin' ? (
                  <>
                    <Link className="text-black fw-bold ms-3" to="Contact">
                      Contact
                    </Link>
                    <Link className="text-black fw-bold ms-3" to="PatientList">
                      Patient
                    </Link>
                  </>
                ) : null}
                <Link className="text-black fw-bold ms-3" to="Consultaion">
                  Consultaion
                </Link>
                <Link className="text-black fw-bold ms-3" to="Transaction">
                  Transaction
                </Link>
                <Link className="text-black fw-bold ms-3" to="Vaccination">
                  Vaccination
                </Link>
                {role === 'Patient' ? (
                  <>
                    <Link className="text-black fw-bold ms-3" to="DiseaseList">
                      Disease
                    </Link>
                    <Link
                      className="text-black fw-bold ms-3"
                      to="CertificateList"
                    >
                      Certificate
                    </Link>
                  </>
                ) : null}
              </Nav>
              <button
                onClick={() => {
                  localStorage.removeItem('tokenss');
                  localStorage.removeItem('role');
                  navigate('/login');
                }}
                className="ms-auto login-link"
              >
                Log Out
              </button>
              <div className="profile-dropdown">
                <img
                  width="60%"
                  className="ms-4"
                  src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png"
                ></img>
                <div className="dropdown-content">
                  <Link to="ChangePassword" className="change-password">
                    ChangePassword
                  </Link>
                  <Link to="Profile" className="view-profile">
                    Profile
                  </Link>
                </div>
              </div>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
