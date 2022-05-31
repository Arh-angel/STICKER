import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthPage from '../../components/pages/AuthPage';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { selectAuthorizationErrorStatus, selectUserAuthorized, selectUserEmail, selectUserPassword, userAuthorized } from '../../store/slice/userSlice/userSlice';

const AuthContainer = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const authErrorStatus = useAppSelector(selectAuthorizationErrorStatus);
  const userAuth = useAppSelector(selectUserAuthorized);
  const userEmail = useAppSelector(selectUserEmail);
  const userPassword = useAppSelector(selectUserPassword);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const writeEnteredEmail = (value:string) => {
    setEnteredEmail(value);
  };

  const writeEnteredPassword = (value:string) => {
    setEnteredPassword(value);
  };

  const handler = () => {
    if (!authErrorStatus && userEmail === enteredEmail && userPassword === enteredPassword) {
      dispatch(userAuthorized(true));
      navigate('/', { state: { userAuth } });
    }
  };

  return (
    <AuthPage handler={handler} writeEmail={writeEnteredEmail} writePassword={writeEnteredPassword} />
  );
};

export default AuthContainer;
