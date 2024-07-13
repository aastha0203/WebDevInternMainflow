import React from 'react';
import ImageItem from './ImageItem';
import './ImageGallery.css';

const ImageGallery = ({ images, openModal }) => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <ImageItem key={index} image={image} openModal={openModal} />
      ))}
    </div>
  );
};

export default ImageGallery;
