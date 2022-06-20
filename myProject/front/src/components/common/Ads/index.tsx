/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react';
import { IAd } from '../../../models/IAd';
import Button from '../Button';
import PublishMenu from '../PublishMenu';

import style from './Ads.module.scss';

type AdsType = {
  dataAd: IAd,
}

const Ads = (props: AdsType) => {
  const { dataAd } = props;

  const [openPublishMenu, setOpenPublishMenu] = useState(false);

  const handlerPublishMenu = () => {
    setOpenPublishMenu(!openPublishMenu);
  };

  return (
    <li className={style.productItem} key={dataAd.id}>
      <p className={style.productItemName}>{dataAd.nameAd}</p>
      <p className={style.pageProductItemCategory}>{dataAd.category}</p>
      <p className={style.productItemDate}>{dataAd.date}</p>
      <p className={style.productItemPublication}>{dataAd.published}</p>
      <div className={style.productItemBtnWrapper}>
        <Button
          clName={null}
          title={null}
          handler={handlerPublishMenu}
          width={null}
          height={null}
          background={openPublishMenu ? 'rgba(44, 45, 46, 0.04)' : 'transparent'}
          textColor={null}
          fontSize={null}
          fontWeight={null}
          margin={null}
          borderRadius={null}
          icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#2A2F37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#2A2F37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#2A2F37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>} />
        {openPublishMenu ? <PublishMenu dataAd={dataAd} /> : ''}
      </div>
    </li>
  );
};

export default Ads;
