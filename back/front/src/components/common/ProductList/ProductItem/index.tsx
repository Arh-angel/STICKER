/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import itemImg from '../../../../assets/images/testItemImg.jpg';
import style from './ProductItem.module.scss';

const ProductItem = () => {
  console.log('Card Product');

  return (
    <li className={style.container}>
      <Link to="/">
        <div className={style.itemImg}>
          <img src={itemImg} alt="" />
          <span className={style.categoryLabel}>Техника</span>
        </div>
        <div className={style.textBlock}>
          <h4 className={style.itemTitle}>Стиральная машина Bosch</h4>
          <p className={style.itemDescription}>Машина в хорошем состоянии. Возможен разумный торг</p>
          <p className={style.itemPrice}>22 500 Р</p>
          <div className={style.itemWrapperDateViews}>
            <p className={style.itemDate}>14 апреля 2021</p>
            <div className={style.itemViews}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="rgba(42, 47, 55, 0.20)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="rgba(42, 47, 55, 0.20)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>356</span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ProductItem;
