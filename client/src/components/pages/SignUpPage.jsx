import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function SignUpPage({ handleSignUp }) {
  const navigate = useNavigate();
  return (
    <Form onSubmit={(e) => handleSignUp(e).then(navigate('/'))}>
      <Form.Group controlId="formEmail" className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Введите email" name="email" />
      </Form.Group>

      <Form.Group controlId="formName" className="mb-3">
        <Form.Label>Имя</Form.Label>
        <Form.Control type="text" placeholder="Введите имя" name="username" />
      </Form.Group>

      <Form.Group controlId="formPassword" className="mb-3">
        <Form.Label>Пароль</Form.Label>
        <Form.Control type="password" placeholder="Введите пароль" name="password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Зарегистрироваться
      </Button>
    </Form>
  );
}
