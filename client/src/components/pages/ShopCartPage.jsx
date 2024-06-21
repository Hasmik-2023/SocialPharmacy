import React from 'react';
import { Card, Button, Container, Row, Col, ListGroup } from 'react-bootstrap';

export default function ShopCartPage({ cartItems = [], handleCheckout }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h2 className="mb-4">Корзина</h2>
          {cartItems.length > 0 ? (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                  <Row className="w-100">
                    <Col md={2}>
                      <Card.Img variant="top" src={`http://localhost:3000/${item.image}`} />
                    </Col>
                    <Col md={6}>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                    </Col>
                    <Col md={2}>
                      <Card.Text>{item.price} руб.</Card.Text>
                    </Col>
                    <Col md={2}>
                      <Card.Text>Количество: {item.quantity}</Card.Text>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <h5>Общая сумма:</h5>
                <h5>{totalPrice} руб.</h5>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-end">
                <Button variant="primary" onClick={handleCheckout}>
                  Оформить заказ
                </Button>
              </ListGroup.Item>
            </ListGroup>
          ) : (
            <h5>Ваша корзина пуста</h5>
          )}
        </Col>
      </Row>
    </Container>
  );
}
