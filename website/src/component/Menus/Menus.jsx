import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const Menus = () => {
  const [menus, setMenus] = useState([]);

  const fetchMenuData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/menus/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMenus(data);
    } catch (error) {
      console.error('Error fetching menu data:', error.message);
    }
  };

  useEffect(() => {
    fetchMenuData();
  }, []);

  const displayMenusByCategory = (category) => {
    const filteredMenu = menus.filter((menu) => menu.category === category);
    return (
      <Row className="show-grid row-no-padding flex-row pt-4" lg={4} gap={3}>
        {filteredMenu.map((menu) => (
          <Col md={4} className="pt-4" key={menu.id}>
            <Card>
              <Card.Img
                variant="top"
                src={menu.image}
                className="img-thumbnail"
                style={{
                  width: '410px',
                  height: '260px',
                }}
              />
              <Card.Body>
                <Card.Title>{menu.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Rp.{menu.price}000,-
                </Card.Subtitle>
                <Card.Text>{menu.description}</Card.Text>
                <Button variant="success">{menu.category}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  };

  return (
    <div>
      <h2>Utama</h2>
      {displayMenusByCategory('Utama')}

      <h2>Pembuka</h2>
      {displayMenusByCategory('Pembuka')}

      <h2>Penutup</h2>
      {displayMenusByCategory('Penutup')}
    </div>
  );
};

export default Menus;
