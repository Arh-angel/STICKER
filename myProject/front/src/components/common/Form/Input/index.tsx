import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/storeHooks';

import style from './Input.module.scss';

type InputPropsType = {
  id: string;
  placeholder: string | null;
  type: 'text' | 'password' | 'tel' | 'file';
  handlerErMessage: (value:string) => void | null;
  trackName: (value:string) => void | null;
  trackLastName: (value:string) => void | null;
  trackEmail: (value:string) => void | null;
};

const Input = ({
  id, placeholder, type = 'text', handlerErMessage, trackName, trackLastName, trackEmail
}: InputPropsType) => {
  // eslint-disable-next-line no-useless-escape
  const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const [currentValue, setCurrentValue] = useState('');
  const [valid, setValid] = useState(true);
  const [erMessage, setErMessage] = useState('');

  const dispatch = useAppDispatch();

  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);
  };

  useEffect(() => {
    if (currentValue.length > 1 && valid) {
      if (id === 'name') {
        trackName(currentValue);
      } else if (id === 'lastName') {
        trackLastName(currentValue);
      } else if (id === 'email') {
        trackEmail(currentValue);
      }
    } else if (currentValue.length === 0 || !valid) {
      if (id === 'name') {
        trackName('');
      } else if (id === 'lastName') {
        trackLastName('');
      } else if (id === 'email') {
        trackEmail('');
      }
    }
  }, [currentValue, valid]);

  useEffect(() => {
    handlerErMessage(erMessage);
  }, [currentValue, valid]);

  useEffect(() => {
    if (currentValue.length > 0) {
      if ((id === 'name' || id === 'lastName') && (currentValue.length < 2 || currentValue.length > 25)) {
        setValid(false);
        setErMessage('Имя и фамилия должны быть не менее 2 и не более 25 символов');
      } else if (id === 'email' && !currentValue.match(regEmail)) {
        setValid(false);
        setErMessage('Некорректный формат адреса электронной почты');
      } else {
        setValid(true);
        setErMessage('');
      }
    } else {
      setValid(true);
      setErMessage('');
    }
  }, [currentValue]);

  return (
    <label className={style.wrapper} htmlFor={id}>
      <input id={id} onChange={handler} type={type} className={!valid ? style.notValid : ''} />
      <span>{placeholder}</span>
    </label>
  );
};

export default Input;
