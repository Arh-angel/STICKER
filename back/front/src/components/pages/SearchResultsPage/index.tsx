import React from 'react';
import { Link } from 'react-router-dom';

import style from './SearchResultsPage.module.scss';

const SearchResultsPage = () => {
  const path = 'path';
  console.log('Search Results');

  return (
    <div className={style.container}>
      <div className={style.numberProducts}>
        <p>Найдено: 26</p>
      </div>
      <div className={style.wrapperList}>
        <ul className={style.productList}>
          <li className={style.productItem}>
            <Link to={path} className={style.productTitle}>Стиральная машина Bosch</Link>
            <p className={style.productDescription}>
              Стиральная машина в отличном состянии, чистая, без накипи.
              С машиной отдам новый шланг для подключения воды и упаковку средства против накипи.
            </p>
            <p className={style.productDate}>14 апреля 2022</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchResultsPage;
