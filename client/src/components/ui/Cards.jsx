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
        <Card.Text>{card.description}</Card.Text>
        <Button variant="primary">Купить</Button>
      </Card.Body>
    </Card>
  );
}
