import React from 'react';

export const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <div
    {...props}
    className={`slick-arrow-prev slick-arrow ${
      currentSlide === 0 ? ' slick-disabled' : ''
    }`}
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    <a
      href="#prev"
      className="slick-prev"
      onClick={(ev) => ev.preventDefault()}
    >
      {/* <Icon name="chevron-left"></Icon> */}
      icon
    </a>
  </div>
);

export const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <div
    {...props}
    className={`slick-arrow-next slick-arrow ${
      currentSlide === slideCount - 3 ? ' slick-disabled' : ''
    }`}
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 3 ? ' slick-disabled' : ''}
    type="button"
  >
    <a
      href="#next"
      className="slick-next"
      onClick={(ev) => ev.preventDefault()}
    >
      {/* <Icon name="chevron-right"></Icon> */}
      icon
    </a>
  </div>
);
