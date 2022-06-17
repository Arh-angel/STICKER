/* eslint-disable jsx-a11y/label-has-associated-control */
import { checkPrime } from 'crypto';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../../../hooks/storeHooks';
import { addAgreementStatus } from '../../../../../store/slice/userSlice/userSlice';

import style from './Checkbox.module.scss';

type CheckboxType = {
  text: string | null,
  textLink: string | null,
  checked: boolean,
  handlerErMessage: (value:string) => void | null
}

const Checkbox = (props: CheckboxType) => {
  const { text, textLink, checked, handlerErMessage } = props;
  const [checkedValue, setCheckedValue] = useState(false);
  const [erMessage, setErMessage] = useState('');

  const dispatch = useAppDispatch();

  useEffect(() => {
    setCheckedValue(checked);
  }, []);

  useEffect(() => {
    handlerErMessage(erMessage);
  }, [checkedValue]);

  useEffect(() => {
    if (checkedValue) {
      setErMessage('Примите условия');
      dispatch(addAgreementStatus(true));
    } else {
      setErMessage('');
      dispatch(addAgreementStatus(false));
    }
  }, [checkedValue]);

  const handler = () => {
    setCheckedValue(!checkedValue);
  };

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
