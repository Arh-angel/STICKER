import React from 'react';

import style from './Banner.module.scss';

import bannerImg from '../../../assets/images/bannerImg.png';

const Banner = () => (
  <div className={style.banner}>
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.text}>
          <h1 className={style.title}>Доска объявлений</h1>
          <p className={style.paragraph}>
            Находи тысячи разнообразных товаров и услуг
            <br />
            от продавцов со всей страны.
            <br />
            Безопасные расчеты. Удобный сервис доставки
          </p>
        </div>
        <div className={style.img}>
          <img src={bannerImg} alt="bannerImg" />
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
