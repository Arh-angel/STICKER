/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks/storeHooks';
import { IAd } from '../../../models/IAd';
import { selectAds } from '../../../store/slice/adsSlice/adsSlice';
import Button from '../Button';
import ProductItem from './ProductItem';

import style from './ProductList.module.scss';

type ProductListPropsType = {
  ads: IAd[]
}

const ProductList = (props: ProductListPropsType) => {
  const { ads } = props;
  const [dataAds, setDataAds] = useState<IAd[]>([]);
  const [adsPerPage, setAdsPerPage] = useState<number>(9);

  useEffect(() => {
    setDataAds(ads);
  }, []);

  const handlerBtn = () => {
    setAdsPerPage((prev) => prev * 2);
  };

  return (
    <div className={style.container}>
      <h3 className={style.title}>Вся лента</h3>
      <div className={style.wrapperList}>
        <ul className={style.list}>
          {dataAds.reverse().map((ad, index) => {
            if (index <= adsPerPage) {
              return <ProductItem dataAd={ad} />;
            }

            return '';
          })}
        </ul>
      </div>
      <div className={style.BtnLoadMore}>
        <Button
          clName={null}
          title="Загрузить еще"
          handler={handlerBtn}
          width="242px"
          height="48px"
          background="transparent"
          textColor="#3A95FF"
          fontSize="16px"
          fontWeight="700"
          margin={null}
          borderRadius="4px"
          icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.3333 0.666656L13.9999 3.33332L11.3333 5.99999" stroke="#4877F2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 7.33334V6.00001C2 5.29277 2.28095 4.61449 2.78105 4.11439C3.28115 3.61429 3.95942 3.33334 4.66667 3.33334H14" stroke="#4877F2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.66667 15.3333L2 12.6667L4.66667 10" stroke="#4877F2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 8.66666V9.99999C14 10.7072 13.719 11.3855 13.219 11.8856C12.7189 12.3857 12.0406 12.6667 11.3333 12.6667H2" stroke="#4877F2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>} />
      </div>
    </div>
  );
};

export default ProductList;
