import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

export default function ShopCartPage() {
  return (
    <Container>
      <Row>
          <Col>
            <Card>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text></Card.Text>
                <Card.Text>
                  Цена:
                </Card.Text>
                <Button variant="primary" >
                  Оформить заказ
                </Button>
              </Card.Body>
            </Card>
          </Col>
      </Row>
    </Container>
  );
}
