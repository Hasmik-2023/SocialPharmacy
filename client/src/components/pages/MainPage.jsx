import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import axiosInstance from '../api/axiosInstance';
import Cards from '../ui/Cards';

export default function MainPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axiosInstance.get('/drugs').then((res) => setCards(res.data));
  }, []);

  return (
    <Container className="my-5">
      <Row className="justify-content-center g-4">
        {cards?.map((card) => (
          <Col md={3}>
            <Cards key={card.id} card={card} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
