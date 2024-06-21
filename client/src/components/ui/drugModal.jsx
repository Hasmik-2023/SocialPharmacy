import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import useStore from '../../store';

export default function DrugModal() {
  const content = useStore((state) => state.content);
  const setContent = useStore((state) => state.setContent);
  return (
    <Modal show={!!content} onHide={() => { setContent(null); }}>
      <Modal.Header closeButton>
        <Modal.Title>{content?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {content?.description}
      </Modal.Body>
      <Modal.Footer style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Modal.Title>
          <div>{`Цена: ${content?.price} руб.`}</div>
          <div>{`В наличии: ${content?.count} шт.`}</div>
        </Modal.Title>
        <Button variant="primary">Добавить в Корзину</Button>
      </Modal.Footer>
    </Modal>
  );
}
