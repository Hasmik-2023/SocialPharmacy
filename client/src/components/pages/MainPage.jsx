import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';


import axiosInstance from '../api/axiosInstance';
import Cards from '../ui/Cards';
import DrugModal from '../ui/drugModal';
import './MainPage.css';


export default function MainPage() {
  const [cards, setCards] = useState([]);
  const [sortedCards, setSortedCards] = useState([]);

  useEffect(() => {
    axiosInstance.get('/drugs').then((res) => {
      setCards(res.data);
      setSortedCards(res.data);
    });
  }, []);

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
