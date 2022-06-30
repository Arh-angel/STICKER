import React, { useEffect, useState } from 'react';

import Button from '../Button';
import Checkbox from '../Form/Input/Checkbox';

import style from './Filter.module.scss';

type FilterPropsTypes = {
  handlerListFilterValue: (value: {category:string[], published:string[]}) => void | null,
  selectedFilters: {category:string[], published:string[]}
}

const Filter = (props: FilterPropsTypes) => {
  const { handlerListFilterValue, selectedFilters } = props;

  const [filterValue, setFilterValue] = useState<{category:string[], published:string[]}>(selectedFilters);
  const [applyFilter, setApplyFilter] = useState(false);
  const [checkedFlag, setCheckedFlag] = useState(true);

  const handlerCheckedFlag = (value:boolean) => {
    // setCheckedFlag(value);
  };

  const handlerApply = () => {
    setApplyFilter(!applyFilter);
  };

  const handlerFilterValue = (id:string, value:string) => {
    if (id === 'category') {
      const coincidence = filterValue.category.find((el) => el === value);
      if (!coincidence) {
        setFilterValue({ category: [...filterValue.category, value], published: [...filterValue.published] });
      }
    } else if (id === 'published') {
      const coincidence = filterValue.published.find((el) => el === value);
      if (!coincidence) {
        setFilterValue({ category: [...filterValue.category], published: [...filterValue.published, value] });
      }
    }
  };

  const deletValue = (value: string) => {
    const categoryDeleteArr = filterValue.category;
    const publishedDeleteArr = filterValue.published;

    const indexValueCategory = categoryDeleteArr.indexOf(value);
    const indexValuePublished = publishedDeleteArr.indexOf(value);

    if (indexValueCategory !== -1) {
      categoryDeleteArr.splice(indexValueCategory, 1);
      setFilterValue({ category: categoryDeleteArr, published: [...filterValue.published] });
    }

    if (indexValuePublished !== -1) {
      publishedDeleteArr.splice(indexValuePublished, 1);
      setFilterValue({ category: [...filterValue.category], published: publishedDeleteArr });
    }
  };

  const handlerResetFilters = () => {
    setFilterValue({ category: [], published: [] });
    setApplyFilter(true);
  };

  useEffect(() => {
    if (applyFilter) {
      handlerListFilterValue(filterValue);
      setApplyFilter(false);
    }
  }, [applyFilter]);

  return (
    <div className={style.filterContainer}>
      <div className={style.filterWrapperCheckbox}>
        <div className={style.filterCategory}>
          <p className={style.filterTitle}>Категория</p>
          <Checkbox id="category" text="Автомобили" textLink={null} checked={false} handlerErMessage={() => null} trackAgreement={() => null} handlerFilterValue={handlerFilterValue} handlerCheckedFlag={() => null} deletValue={deletValue} selectedFilters={filterValue} />
          <Checkbox id="category" text="Аксессуары" textLink={null} checked={false} handlerErMessage={() => null} trackAgreement={() => null} handlerFilterValue={handlerFilterValue} handlerCheckedFlag={() => null} deletValue={deletValue} selectedFilters={filterValue} />
          <Checkbox id="category" text="Одежда" textLink={null} checked={false} handlerErMessage={() => null} trackAgreement={() => null} handlerFilterValue={handlerFilterValue} handlerCheckedFlag={() => null} deletValue={deletValue} selectedFilters={filterValue} />
          <Checkbox id="category" text="Мебель" textLink={null} checked={false} handlerErMessage={() => null} trackAgreement={() => null} handlerFilterValue={handlerFilterValue} handlerCheckedFlag={() => null} deletValue={deletValue} selectedFilters={filterValue} />
          <Checkbox id="category" text="Спорт" textLink={null} checked={false} handlerErMessage={() => null} trackAgreement={() => null} handlerFilterValue={handlerFilterValue} handlerCheckedFlag={() => null} deletValue={deletValue} selectedFilters={filterValue} />
          <Checkbox id="category" text="Техника" textLink={null} checked={false} handlerErMessage={() => null} trackAgreement={() => null} handlerFilterValue={handlerFilterValue} handlerCheckedFlag={() => null} deletValue={deletValue} selectedFilters={filterValue} />
          <Checkbox id="category" text="Товары для дома" textLink={null} checked={false} handlerErMessage={() => null} trackAgreement={() => null} handlerFilterValue={handlerFilterValue} handlerCheckedFlag={() => null} deletValue={deletValue} selectedFilters={filterValue} />
        </div>
        <div className={style.filterPublished}>
          <p className={style.filterTitle}>Опубликовано</p>
          <Checkbox id="published" text="Да" textLink={null} checked={false} handlerErMessage={() => null} trackAgreement={() => null} handlerFilterValue={handlerFilterValue} handlerCheckedFlag={handlerCheckedFlag} deletValue={deletValue} selectedFilters={filterValue} />
          <Checkbox id="published" text="Нет" textLink={null} checked={false} handlerErMessage={() => null} trackAgreement={() => null} handlerFilterValue={handlerFilterValue} handlerCheckedFlag={handlerCheckedFlag} deletValue={deletValue} selectedFilters={filterValue} />
        </div>
      </div>
      <div className={style.filterBtn}>
        <Button clName={null} title="Применить" handler={handlerApply} width="103px" height="40px" background="$sub-color-two" textColor="$second-main-color" fontSize="14px" fontWeight="500" margin="0 24px 0 0" borderRadius="4px" icon={null} />
        <Button clName={null} title="Сбросить" handler={handlerResetFilters} width="103px" height="40px" background="transparent" textColor="$sub-color-two" fontSize="14px" fontWeight="500" margin="0" borderRadius="4px" icon={null} />
      </div>
    </div>
  );
};

export default Filter;
