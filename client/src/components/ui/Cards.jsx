import React from 'react';
import {
  Card, Button, Row, Col,
} from 'react-bootstrap';

export default function Cards({ card }) {
  return (
    <Card style={{ height: '100%' }}>
      <Card.Img variant="top" src={`http://localhost:3000/${card.image}`} />
      <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {/* <Card.Title>{card.title}</Card.Title> */}
        <Card.Text><h4>{card.name}</h4></Card.Text>
        <Button variant="primary">Добавить в Корзину</Button>
      </Card.Body>
    </Card>

  );
}
