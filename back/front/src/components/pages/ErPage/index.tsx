import React from 'react';

import img from '../../../assets/images/ErImg.png';
import style from './ErPage.module.scss';

const ErPage = () => {
  console.log('Er Page');

  return (
    <div className={style.container}>
      <div className={style.wrapperText}>
        <h1 className={style.title}>Упс! Кажется, на эту страницу прилег котик</h1>
        <p className={style.erTypeText}>Ошибка 404</p>
        <p className={style.text}>Мы уже разбираемся, почему так получилось, скоро все починим.</p>
      </div>
      <div className={style.img}>
        <img src={img} alt="Error img" />
      </div>
    </div>
  );
};

export default ErPage;
