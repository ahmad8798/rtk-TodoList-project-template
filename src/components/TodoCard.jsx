
import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

const TodoCard = ({ title, description }) => {
    const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDelete = () => {
    // Perform delete action here
    closeModal();
  };
  return (
    <>
       <div className="todo-card mb-3">
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="d-flex justify-content-between">
            <Button variant="primary">
              <i className="bi bi-pencil"></i> Edit
            </Button>
            <Button variant="danger" onClick={openModal}>
              <i className="bi bi-trash"></i> Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete the todo?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
};

export default TodoCard;
