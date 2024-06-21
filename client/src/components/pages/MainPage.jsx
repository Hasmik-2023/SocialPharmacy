import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import axiosInstance from '../api/axiosInstance';
import Cards from '../ui/Cards';
import DrugModal from '../ui/drugModal';

export default function MainPage({ user }) { // Accept user prop
  const [cards, setCards] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    axiosInstance.get('/drugs').then((res) => setCards(res.data));
  }, []);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center mb-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Calendar onChange={handleDateChange} value={date} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center g-4">
        {cards?.map((card) => (
          <Col key={card.id} md={3}>
            <Cards card={card} user={user} /> {/* Pass user prop to Cards */}
          </Col>
        ))}
      </Row>
      <DrugModal />
    </Container>
  );
}
