/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import usePagination from '../../../hooks/usePagination';
import { ISearchAds } from '../../../models/ISearchAds';
import Button from '../../common/Button';

import style from './SearchResultsPage.module.scss';

type SearchResultsPagePropsType = {
  foundAds: ISearchAds[];
}

const SearchResultsPage = (props: SearchResultsPagePropsType) => {
  const { foundAds } = props;

  const [ads, setAds] = useState<ISearchAds[]>([{
    id: '1',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '2',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '3',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '4',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '5',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '6',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '7',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '8',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '9',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '10',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '11',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '12',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '13',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '14',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '15',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '16',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '17',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '18',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '19',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '20',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '21',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '22',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '23',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '24',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '25',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '26',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '27',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '28',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '29',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '30',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '31',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }, {
    id: '32',
    userId: 'string',
    nameAd: 'string',
    description: 'string',
    date: 'string',
  }]);
  const [firstPagePag, setFirstPagePag] = useState(false);
  const [lastPagePag, setLastPagePag] = useState(false);

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    gaps,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 6,
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

  // useEffect(() => {
  //   setAds(foundAds);
  // }, [foundAds]);

  return (
    <div className={style.container}>
      <div className={style.numberProducts}>
        <p>
          Найдено:
          {' '}
          {ads.length}
        </p>
      </div>
      <div className={style.wrapperList}>
        <ul className={style.productList}>
          {ads.reverse().slice(firstContentIndex, lastContentIndex).map((ad) => (
            <li className={style.productItem} key={ad.id}>
              <Link to={`/searchResults/${ad.id}`} className={style.productTitle}>{ad.nameAd}</Link>
              <p className={style.productDescription}>
                {ad.description}
              </p>
              <p className={style.productDate}>{ad.date}</p>
            </li>
          ))}
        </ul>
        <div className={style.pagination}>
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
          {gaps.before ? <Button
            clName={null}
            title="..."
            handler={() => null}
            width={null}
            height={null}
            background="transparent"
            textColor="#000000"
            fontSize="14px"
            fontWeight={null}
            margin={null}
            borderRadius="3px"
            icon={null} /> : null}
          {/* @ts-ignore */}
          {gaps.paginationGroup.map((el) => <Button
            clName={`${style.page} ${page === el ? style.active : ''}`}
            key={el}
            title={`${el}`}
            handler={() => setPage(el)}
            width={null}
            height={null}
            background="transparent"
            textColor={null}
            fontSize="14px"
            fontWeight={null}
            margin={null}
            borderRadius="3px"
            icon={null} />)}
          {gaps.after ? <Button
            clName={null}
            title="..."
            handler={() => null}
            width={null}
            height={null}
            background="transparent"
            textColor="#000000"
            fontSize="14px"
            fontWeight={null}
            margin={null}
            borderRadius="3px"
            icon={null} /> : null}
          {gaps.after ? <Button
            clName={null}
            title={`${totalPages}`}
            handler={() => setPage(totalPages)}
            width={null}
            height={null}
            background="transparent"
            textColor="#000000"
            fontSize="14px"
            fontWeight={null}
            margin={null}
            borderRadius="3px"
            icon={null} /> : null}
          {/* <p className={style.text}>
            {firstContentIndex + 1}
            <span>&mdash;</span>
            {lastContentIndex}
            <span>&nbsp;из&nbsp;</span>
            {totalPages}
          </p> */}
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
    </div>
  );
};

export default SearchResultsPage;
