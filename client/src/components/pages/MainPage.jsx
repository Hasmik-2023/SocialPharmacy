import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import axiosInstance from '../api/axiosInstance';
import Cards from '../ui/Cards';
import DrugModal from '../ui/drugModal';

export default function MainPage() {
  const [cards, setCards] = useState([]);
  const [cart, setCart] = useState([]);

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

  return (
    <Container className="my-5">
      <Row className="justify-content-center g-4">
        {cards?.map((card) => (
          <Col md={3}>
            <Cards key={card.id} card={card} handleAddToShopcart={handleAddToShopcart} />
          </Col>
        ))}
      </Row>
      <DrugModal />
    </Container>
  );
}
