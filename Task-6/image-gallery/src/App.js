import React, { useState } from 'react';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import './App.css';
import './index.css';

const images = [
  
];

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = images.indexOf(selectedImage);
    setSelectedImage(images[(currentIndex + 1) % images.length]);
  };

  const prevImage = () => {
    const currentIndex = images.indexOf(selectedImage);
    setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
  };

  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <ImageGallery images={images} openModal={openModal} />
      {selectedImage && (
        <Modal
          image={selectedImage}
          closeModal={closeModal}
          nextImage={nextImage}
          prevImage={prevImage}
        />
      )}
    </div>
  );
}

export default App;
