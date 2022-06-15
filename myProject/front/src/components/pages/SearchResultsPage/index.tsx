import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ISearchAds } from '../../../models/ISearchAds';

import style from './SearchResultsPage.module.scss';

type SearchResultsPagePropsType = {
  foundAds: ISearchAds[];
}

const SearchResultsPage = (props: SearchResultsPagePropsType) => {
  const { foundAds } = props;

  const [ads, setAds] = useState<ISearchAds[]>([]);

  useEffect(() => {
    setAds(foundAds);
  }, [foundAds]);

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
          {ads.reverse().map((ad) => (
            <li className={style.productItem} key={ad.id}>
              <Link to={`/searchResults/${ad.id}`} className={style.productTitle}>{ad.nameAd}</Link>
              <p className={style.productDescription}>
                {ad.description}
              </p>
              <p className={style.productDate}>{ad.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchResultsPage;
