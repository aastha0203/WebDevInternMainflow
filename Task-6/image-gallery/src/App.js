import React, { useState } from 'react';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import './App.css';
import './index.css';

const images = [
 './images/image1.png',
 './images/image2.png',
 './images/image3.png',
 './images/image4.png',
 './images/image5.png',
 './images/image6.png',
 './images/image7.png',
 './images/image8.png',
 './images/image9.png',
 './images/image10.png',
 './images/image11.png',
 './images/image12.png',
 './images/image13.png',
 './images/image14.png',
 './images/image15.png',
 './images/image16.png',
 './images/image17.png',
 './images/image18.png',
 './images/image19.png',
 './images/image20.png',
 './images/image21.png',
 './images/image22.png',
 './images/image22.png',
 './images/image23.png',
 './images/image24.png',
 './images/image25.png',
 './images/image26.png',
 './images/image27.png',
 './images/image28.png',
 './images/image29.png',
 './images/image30.png'


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
