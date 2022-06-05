import React, { useState, useEffect, ChangeEvent, useRef } from 'react';
import IMask from 'imask';

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

  const inputRef = useRef(null);

  const regDate = /(0?[1-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).((19|20)\d\d)/;

  // eslint-disable-next-line no-useless-escape
  const regTel = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

  // eslint-disable-next-line no-useless-escape
  const regLocation = /^[a-я]+(?:[- ][а-я]+)*$ | [а-я]+(?:[- ][а-я]+)*$ | [а-яА-Я0-9,\.\s]+$/i;

  const currentInput: any = inputRef.current;
  const maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  const maskDate = {
    mask: Date,
    autofix: true,
    blocks: {
      d: { mask: IMask.MaskedRange, placeholderChar: '12', from: 1, to: 31, maxLength: 2 },
      m: { mask: IMask.MaskedRange, placeholderChar: '04', from: 1, to: 12, maxLength: 2 },
      Y: { mask: IMask.MaskedRange, placeholderChar: '2022', from: 1900, to: 2999, maxLength: 4 }
    }
  };

  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);
  };

  useEffect(() => {
    if (id === 'datePublish') {
      IMask(currentInput, maskDate);
    } else if (id === 'tel') {
      IMask(currentInput, maskOptions);
    }
  }, [currentInput]);

  useEffect(() => {
    if (currentValue.length > 0) {
      if (id === 'nameProduct' && currentValue.length < 2 && currentValue.length > 255) {
        setValid(false);
      } else if (id === 'priceProduct' && +currentValue <= 0) {
        setValid(false);
      } else if (id === 'datePublish' && !currentValue.match(regDate)) {
        setValid(false);
      } else if (id === 'tel' && !currentValue.match(regTel)) {
        console.log('this');
        setValid(false);
      } else if (id === 'location' && !currentValue.match(regLocation)) {
        setValid(false);
      } else {
        setValid(true);
      }
    } else {
      setValid(true);
    }
  }, [currentValue, currentInput]);

  return (
    <label className={style.wrapper} htmlFor={id}>
      <span>{title}</span>
      <input ref={inputRef} id={id} type={type} placeholder={placeholder} onChange={handler} className={!valid ? style.notValid : ''} />
      {!valid ? <span className={style.textError}>{textError}</span> : ''}
    </label>
  );
};

export default InputInfo;
