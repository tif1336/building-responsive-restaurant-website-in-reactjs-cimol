import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavbarComponent = () => {
  const [profile, setProfile] = useState([]);

  const fetchProfileData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/profile/');
      const data = await response.json();
      setProfile(data);
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const renderNavbar = (profileData) => (
    <Navbar bg="light" variant="light" expand="lg" key={profileData.id}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={profileData.logo}
            style={{
              width: '50px',
              height: '50px',
            }}
          />
          {profileData.name}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#menus">Food list</Nav.Link>
            <Nav.Link href="#faq">Faq</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

  return <div>{profile.map(renderNavbar)}</div>;
};

export default NavbarComponent;
   