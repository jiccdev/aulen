import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const GalleryCarousel = ({ filtredData }) => {
  const data = filtredData?.map((item) => item.slider);
  const propertiesSlide = data[0];

  console.log('3', propertiesSlide);

  return (
    <Carousel
      images={propertiesSlide}
      style={{
        width: '100%',
        height: '40%',
      }}
    />
  );
};

export default GalleryCarousel;
