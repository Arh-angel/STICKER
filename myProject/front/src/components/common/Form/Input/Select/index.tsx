/* eslint-disable react/jsx-indent */
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../../hooks/storeHooks';
import { addCategoryAd } from '../../../../../store/slice/adsSlice/adsSlice';
import Button from '../../../Button';

import style from './Select.module.scss';

type SelectPropsType = {
  title: string
}

const Select = (props: SelectPropsType) => {
  const { title } = props;

  const [currentValue, setCurrentValue] = useState('Автомобили');
  const [openSelect, setOpenSelect] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addCategoryAd(currentValue));
  }, [currentValue]);

  const handlerCurrentValue = (value: string) => {
    setCurrentValue(value);
    setOpenSelect(!openSelect);
  };

  const handlerOpenSelect = () => {
    setOpenSelect(!openSelect);
  };

  return (
    <div className={style.container}>
      <p>{title}</p>
      <Button
        clName={null}
        title={currentValue}
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
        <li role="presentation" onClick={() => handlerCurrentValue('Автомобили')} aria-hidden="true">Автомобили</li>
        <li role="presentation" onClick={() => handlerCurrentValue('Аксессуары')} aria-hidden="true">Аксессуары</li>
        <li role="presentation" onClick={() => handlerCurrentValue('Одежда')} aria-hidden="true">Одежда</li>
        <li role="presentation" onClick={() => handlerCurrentValue('Мебель')} aria-hidden="true">Мебель</li>
        <li role="presentation" onClick={() => handlerCurrentValue('Спорт')} aria-hidden="true">Спорт</li>
        <li role="presentation" onClick={() => handlerCurrentValue('Техника')} aria-hidden="true">Техника</li>
        <li role="presentation" onClick={() => handlerCurrentValue('Товары для дома')} aria-hidden="true">Товары для дома</li>
                    </ul> : ''}
    </div>
  );
};

export default Select;
