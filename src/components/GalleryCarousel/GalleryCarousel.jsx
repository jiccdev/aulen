import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const GalleryCarousel = ({ images }) => {
  const imagesList = images?.map((image) => ({
    src: image === 'undefined' ? '' : image,
  }));

  return (
    <Carousel
      images={images?.length > 0 ? imagesList : []}
      style={{
        width: '100%',
        height: '40%',
      }}
    />
  );
};

export default GalleryCarousel;
