import React from 'react';
import { Link } from 'react-router-dom';
import { IAd } from '../../../models/IAd';

import style from './PublishMenu.module.scss';

type PublishMenuPropsType = {
  dataAd: IAd
}
const PublishMenu = (props: PublishMenuPropsType) => {
  const { dataAd } = props;

  return (
    <div className={style.publishMenuContainer}>
      <ul className={style.publishMenuList}>
        <li className={style.publishMenuitem}>
          <Link to={`/ads/${dataAd.id}`}>
            <span className={style.publishMenuLineActiveLink} />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="rgba(44, 45, 46, 0.08)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="rgba(44, 45, 46, 0.08)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className={style.publishMenuText}>Просмотреть</p>
          </Link>
        </li>
        <li className={style.publishMenuitem}>
          <Link to={`/ads/productEditing/${dataAd.id}`}>
            <span className={style.publishMenuLineActiveLink} />
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.1666 2.49993C14.3855 2.28106 14.6453 2.10744 14.9313 1.98899C15.2173 1.87054 15.5238 1.80957 15.8333 1.80957C16.1428 1.80957 16.4493 1.87054 16.7353 1.98899C17.0213 2.10744 17.2811 2.28106 17.5 2.49993C17.7188 2.7188 17.8924 2.97863 18.0109 3.2646C18.1294 3.55057 18.1903 3.85706 18.1903 4.16659C18.1903 4.47612 18.1294 4.78262 18.0109 5.06859C17.8924 5.35455 17.7188 5.61439 17.5 5.83326L6.24996 17.0833L1.66663 18.3333L2.91663 13.7499L14.1666 2.49993Z" stroke="rgba(44, 45, 46, 0.08)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className={style.publishMenuText}>Редактировать</p>
          </Link>
        </li>
        <li className={style.publishMenuitem}>
          <Link to="/ads">
            <span className={style.publishMenuLineActiveLink} />
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 5H4.16667H17.5" stroke="rgba(44, 45, 46, 0.08)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.66663 4.99984V3.33317C6.66663 2.89114 6.84222 2.46722 7.15478 2.15466C7.46734 1.8421 7.89127 1.6665 8.33329 1.6665H11.6666C12.1087 1.6665 12.5326 1.8421 12.8451 2.15466C13.1577 2.46722 13.3333 2.89114 13.3333 3.33317V4.99984M15.8333 4.99984V16.6665C15.8333 17.1085 15.6577 17.5325 15.3451 17.845C15.0326 18.1576 14.6087 18.3332 14.1666 18.3332H5.83329C5.39127 18.3332 4.96734 18.1576 4.65478 17.845C4.34222 17.5325 4.16663 17.1085 4.16663 16.6665V4.99984H15.8333Z" stroke="rgba(44, 45, 46, 0.08)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.33337 9.1665V14.1665" stroke="rgba(44, 45, 46, 0.08)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11.6666 9.1665V14.1665" stroke="rgba(44, 45, 46, 0.08)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className={style.publishMenuText}>Удалить</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PublishMenu;
