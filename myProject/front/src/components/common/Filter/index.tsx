import React, { useEffect, useState } from 'react';

import Button from '../Button';
import Checkbox from '../Form/Input/Checkbox';

import style from './Filter.module.scss';

type FilterPropsTypes = {
  handlerListFilterValue: (value: string[]) => void | null,
}

const Filter = (props: FilterPropsTypes) => {
  const { handlerListFilterValue } = props;

  const [filterValue, setFilterValue] = useState<string[]>([]);
  const [applyFilter, setApplyFilter] = useState(false);

  const handlerApply = () => {
    setApplyFilter(!applyFilter);
  };

  const handlerFilterValue = (value:string) => {
    setFilterValue([...filterValue, value]);
  };

  useEffect(() => {
    if (applyFilter) {
      handlerListFilterValue(filterValue);
    }
  }, [applyFilter]);

  return (
    <div className={style.filterContainer}>
      <div className={style.filterWrapperCheckbox}>
        <div className={style.filterCategory}>
          <p className={style.filterTitle}>Категория</p>
          <Checkbox text="Автомобили" textLink={null} checked handlerErMessage={() => null} trackAgreement={() => null} handlerFilterValue={handlerFilterValue} />
          <Checkbox text="Аксессуары" textLink={null} checked={false} handlerErMessage={() => null} trackAgreement={() => null} handlerFilterValue={handlerFilterValue} />
          <Checkbox text="Одежда" textLink={null} checked={false} handlerErMessage={() => null} trackAgreement={() => null} handlerFilterValue={handlerFilterValue} />
          <Checkbox text="Мебель" textLink={null} checked={false} handlerErMessage={() => null} trackAgreement={() => null} handlerFilterValue={handlerFilterValue} />
          <Checkbox text="Спорт" textLink={null} checked={false} handlerErMessage={() => null} trackAgreement={() => null} handlerFilterValue={handlerFilterValue} />
          <Checkbox text="Техника" textLink={null} checked={false} handlerErMessage={() => null} trackAgreement={() => null} handlerFilterValue={handlerFilterValue} />
          <Checkbox text="Товары для дома" textLink={null} checked={false} handlerErMessage={() => null} trackAgreement={() => null} handlerFilterValue={handlerFilterValue} />
        </div>
        <div className={style.filterPublished}>
          <p className={style.filterTitle}>Опубликовано</p>
          <Checkbox text="Да" textLink={null} checked handlerErMessage={() => null} trackAgreement={() => null} handlerFilterValue={handlerFilterValue} />
          <Checkbox text="Нет" textLink={null} checked={false} handlerErMessage={() => null} trackAgreement={() => null} handlerFilterValue={handlerFilterValue} />
        </div>
      </div>
      <div className={style.filterBtn}>
        <Button clName={null} title="Применить" handler={handlerApply} width="103px" height="40px" background="$sub-color-two" textColor="$second-main-color" fontSize="14px" fontWeight="500" margin="0 24px 0 0" borderRadius="4px" icon={null} />
        <Button clName={null} title="Сбросить" handler={() => null} width="103px" height="40px" background="transparent" textColor="$sub-color-two" fontSize="14px" fontWeight="500" margin="0" borderRadius="4px" icon={null} />
      </div>
    </div>
  );
};

export default Filter;
