import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthPage from '../../components/pages/AuthPage';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { authorizationErrorStatus, selectAuthorizationErrorStatus, selectUserAuthorized, selectUserEmail, selectUserPassword, selectUserRole, userAuthorized } from '../../store/slice/userSlice/userSlice';

const AuthContainer = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const [erMessage, setErMessage] = useState('');

  const [role, setRole] = useState('admin');

  const authErrorStatus = useAppSelector(selectAuthorizationErrorStatus);
  const userAuth = useAppSelector(selectUserAuthorized);
  const userEmail = useAppSelector(selectUserEmail);
  const userPassword = useAppSelector(selectUserPassword);
  const userRole = useAppSelector(selectUserRole);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const writeEnteredEmail = (value:string) => {
    setEnteredEmail(value);
  };

  const writeEnteredPassword = (value:string) => {
    setEnteredPassword(value);
  };

  useEffect(() => {
    setRole(userRole);
  }, [userRole]);

  const handler = () => {
    if (!authErrorStatus && userEmail === enteredEmail && userPassword === enteredPassword) {
      dispatch(userAuthorized(true));
      setErMessage('');
      if (role === 'admin') {
        navigate('/ads', { state: { userAuth } });
      } else if (role === 'user') {
        navigate('/', { state: { userAuth } });
      }
    } else if (userPassword !== enteredPassword) {
      setErMessage('Некорректный пароль');
      dispatch(authorizationErrorStatus(true));
    } else if (userEmail !== enteredEmail) {
      setErMessage('Пользователем с указанным email не существует');
      dispatch(authorizationErrorStatus(true));
    } else {
      setErMessage('Заполните обязательные поля');
      dispatch(authorizationErrorStatus(true));
    }
  };

  return (
    <AuthPage handler={handler} writeEmail={writeEnteredEmail} writePassword={writeEnteredPassword} erMessage={erMessage} />
  );
};

export default AuthContainer;
