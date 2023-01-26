import React from 'react';
import Fade from 'react-reveal/Fade';

const FadeComponent = ({ children, ...props }) => {
  return <Fade {...props}>{children}</Fade>;
};

export default FadeComponent;
