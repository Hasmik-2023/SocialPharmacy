import React from 'react';
import { Card, Button } from 'react-bootstrap';
import useStore from '../../store';

export default function Cards({ card, user }) { // Accept user prop
  const setContent = useStore((state) => state.setContent);

  return (
    <Card style={{ height: '100%' }}>
      <Card.Img variant="top" src={`http://localhost:3000/${card.image}`} />
      <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Card.Text><h4>{card.name}</h4></Card.Text>
        {user && (
          <Button variant="primary">Добавить в Корзину</Button>
        )}
        <Button onClick={() => setContent(card.description)} variant="primary">подробнее...</Button>
      </Card.Body>
    </Card>
  );
}
