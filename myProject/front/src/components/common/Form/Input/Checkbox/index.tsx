/* eslint-disable jsx-a11y/label-has-associated-control */
import { checkPrime } from 'crypto';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../../../hooks/storeHooks';

import style from './Checkbox.module.scss';

type CheckboxType = {
  id: string | null,
  text: string,
  textLink: string | null,
  checked: boolean,
  handlerErMessage: (value:string) => void | null,
  trackAgreement: (value:boolean) => void | null,
  handlerFilterValue: (id:string, value:string) => void | null,
  handlerCheckedFlag: (value:boolean) => void | null,
  deletValue: (value: string) => void | null,
  selectedFilters: {category:string[], published:string[]} | null
}

const Checkbox = (props: CheckboxType) => {
  const { id, text, textLink, checked, handlerErMessage, trackAgreement, handlerFilterValue, handlerCheckedFlag, deletValue, selectedFilters } = props;
  const [checkedValue, setCheckedValue] = useState(false);
  const [erMessage, setErMessage] = useState('');

  const dispatch = useAppDispatch();

  useEffect(() => {
    trackAgreement(checkedValue);
  }, [checkedValue]);

  useEffect(() => {
    setCheckedValue(checked);
  }, [checked]);

  useEffect(() => {
    if (selectedFilters?.category.find((el) => el === text)) {
      setCheckedValue(true);
    }
    if (selectedFilters?.published.find((el) => el === text)) {
      setCheckedValue(true);
    }
  }, [selectedFilters]);

  useEffect(() => {
    handlerErMessage(erMessage);
  }, [checkedValue]);

  useEffect(() => {
    if (checkedValue) {
      setErMessage('Примите условия');
    } else {
      setErMessage('');
    }
  }, [checkedValue]);

  const handler = () => {
    setCheckedValue(!checkedValue);

    if (checkedValue) {
      deletValue(text);
    }
  };

  useEffect(() => {
    if (checkedValue) {
      if (text === 'Да') {
        handlerCheckedFlag(true);
      }
      if (text === 'Нет') {
        handlerCheckedFlag(false);
      }
    }
  }, [checkedValue]);

  useEffect(() => {
    if (checkedValue) {
      if (id === 'category') {
        handlerFilterValue(id, text);
      } else if (id === 'published') {
        handlerFilterValue(id, text);
      }
    }
  }, [checkedValue]);

  return (
    <div className={style.wrapper}>
      <label className={style.section__checkbox}>
        <input type="checkbox" checked={checkedValue} onClick={handler} readOnly />
        <span className={style.checkmark} />
      </label>
      <div className={style.text__wrapper}>
        <p>
          {text}
        </p>
        <Link to="/agreement" className={style.link_agreement}>{textLink}</Link>
      </div>
    </div>
  );
};

export default Checkbox;
