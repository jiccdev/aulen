import React from 'react';
import Select from 'react-select';

const RSelect = ({ ...props }) => {
  return (
    <Select
      className={`react-select-container ${
        props.className ? props.className : ''
      }`}
      classNamePrefix="react-select"
      {...props}
    />
  );
};

export default RSelect;
