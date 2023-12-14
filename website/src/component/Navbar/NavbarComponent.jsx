import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const NavbarComponent = () => {
  const [profile, setProfile] = useState([]);

  const fetchProfileData = () => {
    fetch('http://localhost:8000/api/profile/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProfile(data);
      });
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <div>
      {profile.map((profile) => (
        <Navbar bg="light" variant="light" expand="lg" key={profile.id}>
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={profile.logo}
                style={{
                  width: '50px',
                  height: '50px',
                }}
              />
              {profile.name}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown title="Menu" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#utama-menu">Menu Utama</NavDropdown.Item>
                  <NavDropdown.Item href="#pembuka-menu">Menu Pembuka</NavDropdown.Item>
                  <NavDropdown.Item href="#penutup-menu">Menu Penutup</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#faq">Faq</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default NavbarComponent;
