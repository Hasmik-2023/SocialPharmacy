import React, { useState, useEffect } from 'react';
import {
  Col, Container, Row, Card, Button,
} from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import axiosInstance from '../api/axiosInstance';
import Cards from '../ui/Cards';
import DrugModal from '../ui/drugModal';
import './MainPage.css';

export default function MainPage({ user }) { // Accept user prop
  const [cards, setCards] = useState([]);
  const [cart, setCart] = useState([]);
  const [date, setDate] = useState(new Date());
  const [sortedCards, setSortedCards] = useState([]);

  useEffect(() => {
    axiosInstance.get('/drugs').then((res) => {
      setCards(res.data);
      setSortedCards(res.data);
    });
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

  const sortByPrice = (order) => {
    const sorted = [...sortedCards].sort((a, b) => {
      if (order === 'asc') {
        return a.price - b.price;
      }
      return b.price - a.price;
    });
    setSortedCards(sorted);
  };

  return (
    <Container className="my-5">
      <Col md={6}>
        <Card>
          <Card.Body>
            <Calendar onChange={handleDateChange} value={date} />
          </Card.Body>
        </Card>
      </Col>
      <div className="d-flex justify-content-end mb-3">
        <span className="sort-label">Сортировка по цене</span>
        <Button variant="primary" className="me-2" onClick={() => sortByPrice('asc')}>
          ↑
        </Button>
        <Button variant="primary" onClick={() => sortByPrice('desc')}>
          ↓
        </Button>
      </div>
      <Row className="justify-content-center g-4">
        {sortedCards?.map((card) => (
          <Col md={3} key={card.id}>
            <Cards card={card} />
          </Col>
        ))}
      </Row>
      <DrugModal />
    </Container>
  );
}
