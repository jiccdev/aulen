import React from 'react';
import { icons } from '../Icons';
import styles from '../../../styles/components/IconFilter.module.css';

const IconFilter = ({ isGrid, setIsGrid, isList, setIsList }) => {
  const { BsFillGridFill, FaThList } = icons;

  const onFilterGridActive = () => {
    setIsGrid(true);
    setIsList(false);
  };

  const onFilterListActive = () => {
    setIsList(true);
    setIsGrid(false);
  };

  return (
    <div className={styles.iconFilterContainer}>
      <span
        onClick={onFilterGridActive}
        className={isGrid ? styles.isFilterGridActive : ''}
      >
        <BsFillGridFill />
      </span>
      <span
        onClick={onFilterListActive}
        className={isList ? styles.isFilterListActive : ''}
      >
        <FaThList />
      </span>
    </div>
  );
};

export default IconFilter;
