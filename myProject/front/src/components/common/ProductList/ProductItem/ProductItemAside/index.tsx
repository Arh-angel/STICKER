/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import itemImg from '../../../../../assets/images/ProductItemAsideTest1.jpg';
import style from './ProductItemAside.module.scss';

const ProductItemAside = () => {
  console.log('Card Product Item Aside');

  return (
    <li className={style.container}>
      <Link to="/">
        <div className={style.itemImg}>
          <img src={itemImg} alt="" />
        </div>
        <div className={style.textBlock}>
          <h4 className={style.itemTitle}>Стиральная машина</h4>
          <p className={style.itemBrand}>Samsung</p>
        </div>
      </Link>
    </li>
  );
};

export default ProductItemAside;
