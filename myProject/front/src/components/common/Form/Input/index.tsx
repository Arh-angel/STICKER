import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/storeHooks';
import { addAge, addEmail, addFirstName, addLastName, authorizationErrorStatus, selectUserAuthorized, selectUserEmail, selectUserRegistered, userRegistered } from '../../../../store/slice/userSlice/userSlice';

import style from './Input.module.scss';

type InputPropsType = {
  id: string;
  placeholder: string | null;
  type: 'text' | 'password' | 'tel' | 'file';
  writeEmail: (value:string) => void | null;
  handlerErMessage: (value:string) => void | null
};

const Input = ({
  id, placeholder, type = 'text', writeEmail, handlerErMessage
}: InputPropsType) => {
  // eslint-disable-next-line no-useless-escape
  const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const [currentValue, setCurrentValue] = useState('');
  const [valid, setValid] = useState(true);
  const [erMessage, setErMessage] = useState('');

  const isRegistered = useAppSelector(selectUserRegistered);
  const isAuthorized = useAppSelector(selectUserAuthorized);
  const userEmail = useAppSelector(selectUserEmail);

  const dispatch = useAppDispatch();

  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);
  };

  useEffect(() => {
    handlerErMessage(erMessage);
  }, [erMessage]);

  useEffect(() => {
    if (!isAuthorized) {
      writeEmail(currentValue);
    }
  }, [currentValue]);

  useEffect(() => {
    if (currentValue.length > 0) {
      if ((id === 'name' || id === 'lastName') && (currentValue.length < 2 || currentValue.length > 25)) {
        setValid(false);
        setErMessage('Имя и фамилия должны быть не менее 2 и не более 25 символов');
        dispatch(authorizationErrorStatus(true));
      } else if (id === 'age' && +currentValue < 16 && +currentValue > 100) {
        setValid(false);
        setErMessage('Возраст должен быть не менее 16 и не более 100 лет');
        dispatch(authorizationErrorStatus(true));
      } else if (id === 'email' && !currentValue.match(regEmail)) {
        setValid(false);
        setErMessage('Некорректный формат адреса электронной почты');
        dispatch(authorizationErrorStatus(true));
      } else {
        setValid(true);
        setErMessage('');
        dispatch(authorizationErrorStatus(false));
      }
    }
  }, [currentValue]);

  useEffect(() => {
    if (currentValue.length > 0) {
      if (!isRegistered) {
        if (id === 'name' && valid) {
          dispatch(addFirstName(currentValue));
        } else if (id === 'lastName' && valid) {
          dispatch(addLastName(currentValue));
        } else if (id === 'age' && valid) {
          dispatch(addAge(currentValue));
        } else if (id === 'email' && valid) {
          dispatch(addEmail(currentValue));
        }
      }
      // if (!isAuthorized) {
      //   if (id === 'email' && valid) {
      //     if (currentValue === userEmail) {
      //       dispatch(authorizationErrorStatus(false));
      //     } else {
      //       dispatch(authorizationErrorStatus(true));
      //     }
      //   }
      // }
    } else {
      dispatch(authorizationErrorStatus(true));
    }
  }, [currentValue, valid]);

  return (
    <label className={style.wrapper} htmlFor={id}>
      <input id={id} onChange={handler} type={type} className={!valid ? style.notValid : ''} />
      <span>{placeholder}</span>
    </label>
  );
};

export default Input;
