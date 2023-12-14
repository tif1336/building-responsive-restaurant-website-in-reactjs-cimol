import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const Menus = () => {
  const [menu, setMenus] = useState([]);

  const fetchMenuData = () => {
    fetch('http://localhost:8000  /api/menus/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMenus(data);
      });
  };
  useEffect(() => {
    fetchMenuData();
  }, []);
  return (
    <div>
      <Row
        className="show-grid row-no-padding flex-row pt-4"
        lg={4}
        gap={3}
        id="menus"
      >
        {menu.map((menu) => (
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
        ;
      </Row>
    </div>
  );
};

export default Menus;
