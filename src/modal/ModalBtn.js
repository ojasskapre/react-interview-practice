import { useState } from 'react';

import './Modal.css';
import Modal from './Modal';

export default function ModalBtn() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="modal-btn-container">
      <button className="btn btn-open" onClick={() => handleClose()}>
        Open
      </button>
      {isOpen && (
        <Modal
          onSubmit={handleClose}
          onClose={handleClose}
          onCancel={handleClose}
        >
          <h3>Modal Header</h3>
          <p>This is modal content</p>
        </Modal>
      )}
    </div>
  );
}
