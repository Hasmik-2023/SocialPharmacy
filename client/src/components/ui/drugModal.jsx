import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useStore from '../../store';

export default function DrugModal({ card }) {
  const content = useStore((state) => state.content);
  const setContent = useStore((state) => state.setContent);
  return (
    <Modal show={!!content} onHide={() => { setContent(null); }}>
      <Modal.Header closeButton>
        <Modal.Title>Информация о препарате</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
    </Modal>
  );
}
