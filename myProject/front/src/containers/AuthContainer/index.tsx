import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthPage from '../../components/pages/AuthPage';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { login, selectAuthError, selectUserId } from '../../store/slice/authSlice/authSlice';
import { getUser, selectRole, selectUserAuthorized } from '../../store/slice/userSlice/userSlice';

const AuthContainer = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const [erMessage, setErMessage] = useState('');

  const [role, setRole] = useState('');

  const userAuth = useAppSelector(selectUserAuthorized);
  const userId = useAppSelector(selectUserId);
  const authError = useAppSelector(selectAuthError);
  const userRole = useAppSelector(selectRole);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const writeEnteredEmail = (value:string) => {
    setEnteredEmail(value);
  };

  const writeEnteredPassword = (value:string) => {
    setEnteredPassword(value);
  };

  useEffect(() => {
    if (userId) {
      dispatch(getUser(userId));
    }
    setRole(userRole);
    console.log(role);
  }, [userId]);

  useEffect(() => {
    console.log(role);
    setRole(userRole);
  }, [userRole]);

  useEffect(() => {
    setErMessage(authError);
  }, [authError]);

  const handler = () => {
    dispatch(login({ enteredEmail, enteredPassword }));

    if (role === 'admin') {
      navigate('/ads');
    } else if (role === 'user') {
      navigate('/');
    }
  };

  return (
    <AuthPage handler={handler} writeEmail={writeEnteredEmail} writePassword={writeEnteredPassword} erMessage={erMessage} />
  );
};

export default AuthContainer;
