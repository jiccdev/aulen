import React from 'react';
import { icons } from '../Icons';
import styles from '../../../styles/components/IconFilter.module.css';

const IconFilter = () => {
  const { BsFillGridFill, FaThList } = icons;
  return (
    <div className={styles.iconFilterContainer}>
      <span>
        <BsFillGridFill />
      </span>
      <span>
        <FaThList />
      </span>
    </div>
  );
};

export default IconFilter;
