import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function LoginPage({ handleLogin }) {
  const navigate = useNavigate();
  return (
    <Form onSubmit={(e) => handleLogin(e).then(navigate('/'))}>
      <Form.Group controlId="formEmail" className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Введите email" name="email" />
      </Form.Group>

      <Form.Group controlId="formPassword" className="mb-3">
        <Form.Label>Пароль</Form.Label>
        <Form.Control type="password" placeholder="Введите пароль" name="password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Войти
      </Button>
    </Form>
  );
}
