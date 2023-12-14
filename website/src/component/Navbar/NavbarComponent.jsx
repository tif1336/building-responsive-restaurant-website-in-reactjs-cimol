import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-scroll'; // Add this line

const NavbarComponent = () => {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/profile/');
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        profile.map((profileData, index) => (
          <Navbar key={index} bg="light" variant="light" expand="lg">
            <Container>
              <Navbar.Brand>
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
                  <NavDropdown title="Menu" id="basic-nav-dropdown">
                    <Link to="utama-menu" smooth={true} duration={500}>
                      <NavDropdown.Item>Menu Utama</NavDropdown.Item>
                    </Link>
                    <Link to="pembuka-menu" smooth={true} duration={500}>
                      <NavDropdown.Item>Menu Pembuka</NavDropdown.Item>
                    </Link>
                    <Link to="penutup-menu" smooth={true} duration={500}>
                      <NavDropdown.Item>Menu Penutup</NavDropdown.Item>
                    </Link>
                  </NavDropdown>

                  <Nav.Link href="#faq">Faq</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        ))
      )}
    </div>
  );
};

export default NavbarComponent;
