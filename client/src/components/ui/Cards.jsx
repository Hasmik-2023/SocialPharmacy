import React from 'react';
import {
  Card, Button, Row, Col,
} from 'react-bootstrap';
import useStore from '../../store';

export default function Cards({ card, handleAddToShopcart }) {
  const setContent = useStore((state) => state.setContent);
  return (
    <Card style={{ height: '100%' }}>
      <Card.Img variant="top" src={`http://localhost:3000/${card.image}`} />
      <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {/* <Card.Title>{card.title}</Card.Title> */}
        <Card.Text><h4>{card.name}</h4></Card.Text>
        <Card.Text>{`${card.price} руб.`}</Card.Text>
        <Button onClick={() => handleAddToShopcart(card.id)} variant="primary">Добавить в Корзину</Button>
        <Button onClick={() => setContent({description: card.description, name: card.name})} variant="primary">подробнее...</Button>
      </Card.Body>
    </Card>

  );
}
