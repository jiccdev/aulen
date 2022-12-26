import React from 'react';
import Glider from 'react-glider';
import 'glider-js/glider.min.css';

const GliderJs = ({ children }) => {
  return (
    <Glider draggable hasArrows hasDots slidesToShow={3} slidesToScroll={3}>
      {children}
    </Glider>
  );
};

export default GliderJs;
