import { useState, useEffect, useRef } from 'react';
import './dropdown.css';

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const dropdownRef = useRef();

  const items = ['Item 1', 'Item 2', 'Item 3'];

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <div className="dropdown-container">
      <div className="dropdown" ref={dropdownRef}>
        <div className="dropdown-btn" onClick={() => setIsOpen(!isOpen)}>
          <div className="btn-text">{selectedItem || 'Dropdown'}</div>
          <div className="btn-icon">{isOpen ? '-' : '+'}</div>
        </div>
        {isOpen && (
          <div className="dropdown-list">
            {items.map((item, index) => (
              <div
                className={`dropdown-list-item ${
                  selectedItem === item ? 'selected' : ''
                }`}
                key={index}
                onClick={() => setSelectedItem(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
