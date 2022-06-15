/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import itemImg from '../../../../assets/images/testItemImg.jpg';
import { useAppSelector } from '../../../../hooks/storeHooks';
import { IAd } from '../../../../models/IAd';
import { selectAd } from '../../../../store/slice/adsSlice/adsSlice';
import style from './ProductItem.module.scss';

type ProductItemPropsType = {
  dataAd: IAd
}

const ProductItem = (props: ProductItemPropsType) => {
  const { dataAd } = props;

  const adElementary = useAppSelector(selectAd);

  const [ad, setAd] = useState<IAd>(adElementary);

  useEffect(() => {
    setAd(dataAd);
  }, []);

  return (
    <li className={style.container}>
      <Link to={`/${ad.id}`}>
        <div className={style.itemImg}>
          <img src={itemImg} alt="" />
          <span className={style.categoryLabel}>{ad.category}</span>
        </div>
        <div className={style.textBlock}>
          <h4 className={style.itemTitle}>{ad.nameAd}</h4>
          <p className={style.itemDescription}>{ad.description}</p>
          <p className={style.itemPrice}>
            {ad.price}
            {' '}
            Р
          </p>
          <div className={style.itemWrapperDateViews}>
            <p className={style.itemDate}>{ad.date}</p>
            <div className={style.itemViews}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="rgba(42, 47, 55, 0.20)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="rgba(42, 47, 55, 0.20)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{ad.views}</span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ProductItem;
