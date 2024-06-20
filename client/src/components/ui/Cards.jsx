import React from 'react';
import {
  Card, Button,
} from 'react-bootstrap';

export default function Cards({ card }) {
  return (
    <Card>
      <Card.Img variant="top" src={`http://localhost:3000/${card.image}`} />
      <Card.Body>
        {/* <Card.Title>{card.title}</Card.Title> */}
        <Card.Text><h4>{card.name}</h4></Card.Text>
        <Button variant="primary">Добавить в Корзину</Button>
      </Card.Body>
    </Card>
  );
}
