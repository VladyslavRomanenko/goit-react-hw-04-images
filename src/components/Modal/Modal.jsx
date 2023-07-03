import React, { useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = ({ img, onClose }) => {
  useEffect(() => {
    const handleKeydown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <img className={css.modalImage} src={img} alt="card" />
      </div>
    </div>
  );
};
