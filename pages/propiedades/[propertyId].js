import React from 'react';
import { useRouter } from 'next/router';
import {
  SlickArrowLeft,
  SlickArrowRight,
} from '../../src/components/Slick/SlickComponents';

const sliderSettings = {
  className: 'slider-init row',
  slidesToShow: 2,
  centerMode: false,
  slidesToScroll: 1,
  infinite: false,
  prevArrow: <SlickArrowLeft />,
  nextArrow: <SlickArrowRight />,
  responsive: [
    { breakpoint: 3000, settings: { slidesToShow: 4 } },
    { breakpoint: 1540, settings: { slidesToShow: 3 } },
    { breakpoint: 992, settings: { slidesToShow: 2 } },
    { breakpoint: 576, settings: { slidesToShow: 1 } },
  ],
};

const sliderSettingsDefault = {
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  slide: null,
  responsive: [
    { breakpoint: 1539, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 420, settings: { slidesToShow: 1 } },
  ],
  arrows: false,
  swipeToSlide: true,
  focusOnSelect: true,
  className: 'slider-init slider-nav',
};

const PropiedadId = () => {
  const { query } = useRouter();
  const { propertyId } = query;
  

  const [sliderData, setSliderData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState({});
  const [colorSector, setColorSelector] = useState(1);
  const [sizeSelector, setSizeSelector] = useState(1);
  const [counter, setCounter] = useState(1);
  const [videoOpen, setVideoOpen] = useState(false);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  return <div>Propiedad {propertyId}</div>;
};

export default PropiedadId;
