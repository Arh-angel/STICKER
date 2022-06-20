/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import Button from '../../../Button';

import style from './Select.module.scss';

type SelectPropsType = {
  title: string
}

const Select = (props: SelectPropsType) => {
  const { title } = props;

  const [openSelect, setOpenSelect] = useState(false);

  const handlerOpenSelect = () => {
    setOpenSelect(!openSelect);
  };

  return (
    <div className={style.container}>
      <p>{title}</p>
      <Button
        clName={null}
        title="Автомобили"
        handler={handlerOpenSelect}
        width="100%"
        height="64px"
        background="rgba(42, 47, 55, 0.02)"
        textColor="#2A2F37"
        fontSize="16px"
        fontWeight="400"
        margin={null}
        borderRadius="4px"
        icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L12 15L18 9" stroke="#2A2F37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>} />
      {openSelect ? <ul className={style.select}>
        <li>Автомобили</li>
        <li>Аксессуары</li>
        <li>Одежда</li>
        <li>Мебель</li>
        <li>Спорт</li>
        <li>Техника</li>
        <li>Товары для дома</li>
                    </ul> : ''}
    </div>
  );
};

export default Select;
