import React from 'react';
import './Modal.css';

const Modal = ({ image, closeModal, nextImage, prevImage }) => {
  return (
    <div className="modal" onClick={closeModal}>
      <span className="close">&times;</span>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="prev" onClick={prevImage}>&#10094;</span>
        <img src={image} alt="Modal" />
        <span className="next" onClick={nextImage}>&#10095;</span>
      </div>
    </div>
  );
};

export default Modal;
