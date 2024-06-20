import React from 'react';

import {
  Container, Row, Col, Card, Button,
} from 'react-bootstrap';

export default function Cards() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center g-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <Col md={3} key={index}>
            <Card>
              <Card.Img variant="top" src="https://avatars.dzeninfra.ru/get-zen_doc/5295210/pub_637bdef6dc3cca13ad45fa7e_637bdf4365cbbd650a0e49f2/scale_2400" />
              <Card.Body>
                <Card.Title>
                  Card
                  {index + 1}
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
