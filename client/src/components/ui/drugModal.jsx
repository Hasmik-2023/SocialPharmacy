import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useStore from '../../store';

export default function DrugModal({ card }) {
  const content = useStore((state) => state.content);
  const setContent = useStore((state) => state.setContent);
  console.log(content);
  return (
    <Modal show={!!content} onHide={() => { setContent(null); }}>
      <Modal.Header closeButton>
        <Modal.Title>{content?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {content?.description}
      </Modal.Body>
      <Modal.Footer>
        {content?.price}
        <Button variant="primary">Добавить в Корзину</Button>
      </Modal.Footer>
    </Modal>
  );
}
