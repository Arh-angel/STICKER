/* eslint-disable react/jsx-indent */
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/storeHooks';
import { addPassword, authorizationErrorStatus, selectUserAuthorized, selectUserPassword, selectUserRegistered, userAuthorized } from '../../../../../store/slice/userSlice/userSlice';
import style from './PasswordInput.module.scss';

type InputPropsType = {
  id: string;
  placeholder: string;
  type: 'text' | 'password';
  trackPas: (value: string) => void | null;
  trackRepeatPas: (value: string) => void | null;
  pasMatch: boolean | null;
  writePassword: (value:string) => void | null,
  handlerErMessage: (value:string) => void | null
};

const PasswordInput = ({
  id, placeholder, type = 'password', trackPas, trackRepeatPas, pasMatch, writePassword, handlerErMessage
}: InputPropsType) => {
  const regPas = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
  const [isVisible, setIsVisible] = useState(false);
  const [currentTypeInput, setCurrentTypeInput] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [valid, setValid] = useState(true);
  const [erMessage, setErMessage] = useState('');

  const userRegistered = useAppSelector(selectUserRegistered);
  const isAuthorized = useAppSelector(selectUserAuthorized);
  const userPassword = useAppSelector(selectUserPassword);
  const dispatch = useAppDispatch();

  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);
  };

  useEffect(() => {
    setCurrentTypeInput(type);
  }, []);

  useEffect(() => {
    handlerErMessage(erMessage);
  }, [currentValue, valid]);

  useEffect(() => {
    if (!userRegistered) {
      if (id === 'password') {
        trackPas(currentValue);
      } else if (id === 'repeatPassword') {
        trackRepeatPas(currentValue);
      }
    }
    if (!isAuthorized) {
      writePassword(currentValue);
    }
  }, [currentValue]);

  useEffect(() => {
    if (currentValue.length > 0) {
      if (!pasMatch && pasMatch !== null) {
        setValid(false);
        setErMessage('Пароли не совпадают');
        dispatch(authorizationErrorStatus(true));
      } else if (!currentValue.match(regPas) || currentValue.length < 8) {
        setValid(false);
        setErMessage('Пароль должен быть не менее 8 символов и состоять из цифр и латинских букв обоих регистров');
        dispatch(authorizationErrorStatus(true));
      } else {
        setValid(true);
        setErMessage('');
        dispatch(authorizationErrorStatus(false));
      }
    } else {
      setValid(true);
      setErMessage('');
      dispatch(authorizationErrorStatus(false));
    }
  }, [pasMatch, currentValue]);

  useEffect(() => {
    if (isVisible) {
      setCurrentTypeInput('text');
    } else {
      setCurrentTypeInput('password');
    }
  }, [isVisible]);

  useEffect(() => {
    if (currentValue.length > 0) {
      if (!userRegistered) {
        if (valid) {
          dispatch(addPassword(currentValue));
        }
      }
      // if (!isAuthorized) {
      //   if ((id === 'password' || id === 'repeatPassword') && valid) {
      //     if (currentValue === userPassword) {
      //       dispatch(authorizationErrorStatus(false));
      //     } else {
      //       dispatch(authorizationErrorStatus(true));
      //     }
      //   }
      // }
    } else {
      dispatch(authorizationErrorStatus(true));
    }
  }, [currentValue, pasMatch, valid]);

  const createClassName = () => {
    if (pasMatch === null) {
      return !valid ? style.notValid : '';
    }
    return !valid || !pasMatch ? style.notValid : '';
  };

  return (
    <label className={style.wrapper} htmlFor={id}>
      <input id={id} onChange={handler} type={currentTypeInput} className={createClassName()} />
      <span>{placeholder}</span>
      <button type="button" onClick={() => setIsVisible(!isVisible)}>
        {
        isVisible
          ? <svg width="24" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="rgba(42, 47, 55, 0.20)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="rgba(42, 47, 55, 0.20)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.1628 10.9202C20.3732 9.25679 19.4336 7.90015 18.3439 6.85032L17.2011 7.99313C18.133 8.88371 18.9447 10.0488 19.6466 11.4997C17.7779 15.3675 15.1252 17.2048 11.5 17.2048C10.4119 17.2048 9.40961 17.0373 8.4932 16.7021L7.25493 17.9404C8.52771 18.5281 9.94276 18.822 11.5 18.822C15.817 18.822 19.0379 16.5737 21.1628 12.077C21.2482 11.8961 21.2925 11.6986 21.2925 11.4986C21.2925 11.2986 21.2482 11.1011 21.1628 10.9202V10.9202ZM19.7349 3.71836L18.7774 2.75973C18.7607 2.74302 18.7409 2.72977 18.7191 2.72073C18.6973 2.71169 18.6739 2.70703 18.6503 2.70703C18.6267 2.70703 18.6033 2.71169 18.5815 2.72073C18.5596 2.72977 18.5398 2.74302 18.5231 2.75973L16.0666 5.21516C14.7122 4.52337 13.19 4.17747 11.5 4.17747C7.18305 4.17747 3.96215 6.42581 1.83734 10.9225C1.75194 11.1033 1.70764 11.3009 1.70764 11.5009C1.70764 11.7009 1.75194 11.8984 1.83734 12.0792C2.68622 13.8671 3.70819 15.3002 4.90326 16.3785L2.52645 18.7546C2.49277 18.7883 2.47386 18.834 2.47386 18.8816C2.47386 18.9293 2.49277 18.975 2.52645 19.0087L3.4853 19.9675C3.519 20.0012 3.56468 20.0201 3.61232 20.0201C3.65996 20.0201 3.70564 20.0012 3.73934 19.9675L19.7349 3.97262C19.7516 3.95593 19.7649 3.93612 19.7739 3.9143C19.783 3.89249 19.7876 3.86911 19.7876 3.84549C19.7876 3.82188 19.783 3.7985 19.7739 3.77668C19.7649 3.75487 19.7516 3.73505 19.7349 3.71836ZM3.35346 11.4997C5.22446 7.63196 7.8771 5.79466 11.5 5.79466C12.7251 5.79466 13.8389 6.00489 14.8494 6.43232L13.2704 8.01133C12.5226 7.61234 11.6664 7.46426 10.828 7.58894C9.98967 7.71362 9.21358 8.10445 8.61425 8.70378C8.01492 9.30311 7.62408 10.0792 7.4994 10.9176C7.37473 11.7559 7.5228 12.6122 7.92179 13.36L6.0481 15.2336C5.01108 14.3184 4.11713 13.0783 3.35346 11.4997ZM8.89458 11.4997C8.89497 11.1037 8.98878 10.7133 9.1684 10.3603C9.34802 10.0073 9.60837 9.70164 9.9283 9.46817C10.2482 9.23469 10.6187 9.07998 11.0097 9.0166C11.4007 8.95321 11.8011 8.98295 12.1784 9.10338L9.01384 12.2679C8.93453 12.0196 8.89429 11.7604 8.89458 11.4997V11.4997Z" fill="rgba(42, 47, 55, 0.20)" />
            <path d="M11.4103 14.0152C11.3325 14.0152 11.256 14.0117 11.18 14.0047L9.99365 15.1911C10.7072 15.4643 11.4847 15.5251 12.232 15.3659C12.9793 15.2068 13.6646 14.8345 14.2049 14.2942C14.7452 13.7539 15.1174 13.0687 15.2765 12.3214C15.4357 11.574 15.375 10.7966 15.1017 10.083L13.9153 11.2694C13.9223 11.3453 13.9259 11.4219 13.9259 11.4996C13.9261 11.83 13.8611 12.1572 13.7348 12.4625C13.6084 12.7678 13.4231 13.0452 13.1895 13.2788C12.9558 13.5125 12.6784 13.6978 12.3732 13.8241C12.0679 13.9505 11.7407 14.0154 11.4103 14.0152V14.0152Z" fill="rgba(42, 47, 55, 0.20)" />
            </svg>
        }
      </button>
    </label>
  );
};

export default PasswordInput;
