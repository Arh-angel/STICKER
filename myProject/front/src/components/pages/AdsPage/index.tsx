/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';
import usePagination from '../../../hooks/usePagination';

import AsideMenu from '../../common/AsideMenu';
import Ads from '../../common/Ads';
import Button from '../../common/Button';
import Filter from '../../common/Filter';

import style from './AdsPage.module.scss';
import { IAd } from '../../../models/IAd';

type AdsPropsType = {
  handlerBtn: () => void;
  dataAds: IAd[]
}

const AdsPage = (props: AdsPropsType) => {
  const { handlerBtn, dataAds } = props;

  const [ads, setAds] = useState<IAd[]>([{
    id: '8',
    userId: '654654',
    nameAd: 'sdfaasdf',
    category: 'sdfasf',
    price: 0,
    phoneNumber: '89990886545',
    description: 'sdafasf',
    date: '12.04.2022',
    foto: [],
    location: 'dsfafdasdf',
    published: false,
    views: 0
  }]);
  const [openFilterMenu, setOpenFilterMenu] = useState(false);
  const [firstPagePag, setFirstPagePag] = useState(false);
  const [lastPagePag, setLastPagePag] = useState(false);

  // useEffect(() => {
  //   setAds(dataAds);
  // }, [dataAds]);

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    totalPages,
  } = usePagination({
    contentPerPage: 8,
    count: ads.length,
  });

  useEffect(() => {
    if (page === 1) {
      setFirstPagePag(true);
    } else {
      setFirstPagePag(false);
    }

    if (page === totalPages || ads.length === 0) {
      setLastPagePag(true);
    } else {
      setLastPagePag(false);
    }
  }, [page]);

  const handlerFilterMenu = () => {
    setOpenFilterMenu(!openFilterMenu);
  };

  return (
    <div className={style.container}>
      <AsideMenu />
      <div className={style.ads}>
        <div className={style.adsHeader}>
          <div className={style.adsHeaderText}>
            <h2 className={style.adsHeaderTitle}>Объявления</h2>
            <p className={style.adsHeaderSubTitle}>
              Всего:
              <span>
                &nbsp;
                {ads.length}
              </span>
            </p>
          </div>
          <Button
            clName={null}
            title="Добавить"
            handler={handlerBtn}
            width="129px"
            height="40px"
            background={null}
            textColor={null}
            fontSize={null}
            fontWeight={null}
            margin={null}
            borderRadius={null}
            icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 4.1665V15.8332" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.16663 10H15.8333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>} />
        </div>
        <div className={style.searchContainer}>
        <label className={style.searchInput} htmlFor="search">
          <input type="text" placeholder="Найти объявление" />
          <span className={style.searchInputLoupe}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.4">
            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#2A2F37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.9999 20.9999L16.6499 16.6499" stroke="#2A2F37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            </svg>
          </span>
        </label>
        <div className={style.searchBtnWrapper}>
        <Button
          clName={null}
          title="Фильтровать"
          handler={handlerFilterMenu}
          width="153px"
          height="40px"
          background="rgba(42, 47, 55, 0.08)"
          textColor="#1D1D1D"
          fontSize="14px"
          fontWeight="500"
          margin="8px 16px"
          borderRadius="0"
          icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.19995 12L16.7999 12" stroke="#2C2D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
<path d="M3.6001 6L20.4001 6" stroke="#2C2D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
<path d="M10.8 18L13.2001 18" stroke="#2C2D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>} />
        {openFilterMenu ? <Filter /> : ''}
        </div>
        <div className={style.pagination}>
          <p className={style.text}>
            {firstContentIndex + 1}
            <span>&mdash;</span>
            {lastContentIndex}
            <span>&nbsp;из&nbsp;</span>
            {totalPages}
          </p>
          <Button
            clName={null}
            title={null}
            handler={prevPage}
            width={null}
            height={null}
            background="transparent"
            textColor={null}
            fontSize={null}
            fontWeight={null}
            margin={null}
            borderRadius={null}
            icon={<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00016 0L7.41016 1.41L2.83016 6L7.41016 10.59L6.00016 12L0.000156403 6L6.00016 0Z" fill={firstPagePag ? 'rgba(29, 29, 29, .6)' : '#1D1D1D'} />
                  </svg>} />
          <Button
            clName={null}
            title={null}
            handler={nextPage}
            width={null}
            height={null}
            background="transparent"
            textColor={null}
            fontSize={null}
            fontWeight={null}
            margin={null}
            borderRadius={null}
            icon={<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill={lastPagePag ? 'rgba(29, 29, 29, .6)' : '#1D1D1D'} />
                  </svg>} />
        </div>
        </div>
        <div className={style.aboutAds}>
            <Button
              clName={null}
              title="Название объявления"
              handler={() => null}
              width="auto"
              height="40px"
              background="transparent"
              textColor="#1D1D1D"
              fontSize="12px"
              fontWeight="700"
              margin={null}
              borderRadius={null}
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.4">
              <path d="M12 7L16 11H8L12 7Z" fill="#2C2D2E" />
              <path d="M12 17L8 13L16 13L12 17Z" fill="#2C2D2E" />
              </g>
                    </svg>} />
            <p className={style.aboutAdsTitle}>Категория</p>
            <p className={style.aboutAdsTitle}>Дата публикации</p>
            <p className={style.aboutAdsTitle}>Публикация</p>
        </div>
        <div className={style.wrapperProductList}>
          <ul className={style.productList}>
            {ads
              .slice(firstContentIndex, lastContentIndex)
              .map((dataAd: any) => (
                <Ads dataAd={dataAd} />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdsPage;
