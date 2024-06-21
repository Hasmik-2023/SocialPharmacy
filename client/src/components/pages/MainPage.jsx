import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import axiosInstance from '../api/axiosInstance';
import Cards from '../ui/Cards';
import DrugModal from '../ui/drugModal';

export default function MainPage({ user }) { // Accept user prop
  const [cards, setCards] = useState([]);
  const [cart, setCart] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    axiosInstance.get('/drugs').then((res) => setCards(res.data));
  }, []);

  const handleAddToShopcart = async (drugId) => {
    try {
      const response = await axiosInstance.post(`/shopcart/${drugId}`);
      const updatedCart = [...cart];
      const existingItem = updatedCart.find((item) => item.drugId === drugId);
      if (existingItem) {
        existingItem.count += 1;
      } else {
        updatedCart.push({ drugId });
      }
      if (response.status === 201) {
        setCart(updatedCart);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            <Cards card={card} handleAddToShopcart={handleAddToShopcart} user={user} /> {/* Pass user prop to Cards */}
          </Col>
        ))}
      </Row>
      <DrugModal />
    </Container>
  );
}
