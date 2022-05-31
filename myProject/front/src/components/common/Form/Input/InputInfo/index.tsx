import React, { useState, useEffect, ChangeEvent } from 'react';

import style from './InputInfo.module.scss';

type InputInfoPropsType = {
  title: string | null;
  id: string;
  placeholder: string | undefined;
  type: 'text';
};

const InputInfo = ({
  title, id, placeholder, type = 'text'
}: InputInfoPropsType) => {
  const [currentValue, setCurrentValue] = useState('');
  const [valid, setValid] = useState(true);
  const [textError, setTextError] = useState('');

  const regDate = /(0?[1-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).((19|20)\d\d)/;

  // eslint-disable-next-line no-useless-escape
  const regTel = /^((\+7|7|8)+([0-9]){10})$/;

  // eslint-disable-next-line no-useless-escape
  const regLocation = /^[a-я]+(?:[- ][а-я]+)*$ | [а-я]+(?:[- ][а-я]+)*$ | [а-яА-Я0-9,\.\s]+$/i;

  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);
  };

  useEffect(() => {
    if (currentValue.length > 0) {
      if (id === 'nameProduct' && currentValue.length < 2) {
        setValid(false);
      } else if (id === 'priceProduct' && +currentValue <= 0) {
        setValid(false);
      } else if (id === 'datePublish' && !currentValue.match(regDate)) {
        setValid(false);
      } else if (id === 'tel' && !currentValue.match(regTel)) {
        setValid(false);
      } else if (id === 'location' && !currentValue.match(regLocation)) {
        setValid(false);
      } else {
        setValid(true);
      }
    }
  }, [currentValue]);

  return (
    <label className={style.wrapper} htmlFor={id}>
      <span>{title}</span>
      <input id={id} type={type} placeholder={placeholder} onChange={handler} className={!valid ? style.notValid : ''} />
      {!valid ? <span className={style.textError}>{textError}</span> : ''}
    </label>
  );
};

export default InputInfo;
