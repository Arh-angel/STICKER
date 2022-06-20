import React from 'react';

import Button from '../Button';
import Checkbox from '../Form/Input/Checkbox';

import style from './Filter.module.scss';

const Filter = () => {
  console.log('Filter');

  return (
    <div className={style.filterContainer}>
      <div className={style.filterWrapperCheckbox}>
        <div className={style.filterCategory}>
          <p className={style.filterTitle}>Категория</p>
          <Checkbox text="Автомобили" textLink={null} checked handlerErMessage={() => null} trackAgreement={() => null} />
          <Checkbox text="Аксессуары" textLink={null} checked={false} handlerErMessage={() => null} trackAgreement={() => null} />
          <Checkbox text="Одежда" textLink={null} checked={false} handlerErMessage={() => null} trackAgreement={() => null} />
          <Checkbox text="Мебель" textLink={null} checked={false} handlerErMessage={() => null} trackAgreement={() => null} />
          <Checkbox text="Спорт" textLink={null} checked={false} handlerErMessage={() => null} trackAgreement={() => null} />
          <Checkbox text="Техника" textLink={null} checked={false} handlerErMessage={() => null} trackAgreement={() => null} />
          <Checkbox text="Товары для дома" textLink={null} checked={false} handlerErMessage={() => null} trackAgreement={() => null} />
        </div>
        <div className={style.filterPublished}>
          <p className={style.filterTitle}>Опубликовано</p>
          <Checkbox text="Да" textLink={null} checked handlerErMessage={() => null} trackAgreement={() => null} />
          <Checkbox text="Нет" textLink={null} checked={false} handlerErMessage={() => null} trackAgreement={() => null} />
        </div>
      </div>
      <div className={style.filterBtn}>
        <Button clName={null} title="Применить" handler={() => null} width="103px" height="40px" background="$sub-color-two" textColor="$second-main-color" fontSize="14px" fontWeight="500" margin="0 24px 0 0" borderRadius="4px" icon={null} />
        <Button clName={null} title="Сбросить" handler={() => null} width="103px" height="40px" background="transparent" textColor="$sub-color-two" fontSize="14px" fontWeight="500" margin="0" borderRadius="4px" icon={null} />
      </div>
    </div>
  );
};

export default Filter;
