import { useRef, useEffect } from 'react';
import './Modal.css';

export default function Modal({ onSubmit, onCancel, onClose, children }) {
  const modalContainerRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (
        modalContainerRef.current &&
        !modalContainerRef.current.contains(e.target)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <div className="modal-container">
      <div className="modal" ref={modalContainerRef}>
        <div className="modal-header">
          <div className="modal-header-close" onClick={() => onClose()}>
            &times;
          </div>
        </div>
        <div className="modal-content">{children}</div>
        <div className="modal-footer">
          <button className="btn btn-submit" onClick={() => onSubmit()}>
            Submit
          </button>
          <button className="btn btn-cancel" onClick={() => onCancel()}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
