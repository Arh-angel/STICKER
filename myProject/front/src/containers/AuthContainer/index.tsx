import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthPage from '../../components/pages/AuthPage';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { clearErrorMessage, login, selectAuthError, selectUserId, selectUserRole } from '../../store/slice/authSlice/authSlice';
import { getUser } from '../../store/slice/userSlice/userSlice';

const AuthContainer = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const [erMessage, setErMessage] = useState('');

  const [role, setRole] = useState('');

  const userId = useAppSelector(selectUserId);
  const authError = useAppSelector(selectAuthError);
  const userRole = useAppSelector(selectUserRole);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const trackEmail = (value:string) => {
    setEnteredEmail(value);
  };

  const trackPassword = (value:string) => {
    setEnteredPassword(value);
  };

  useEffect(() => {
    dispatch(clearErrorMessage());
  }, []);

  useEffect(() => {
    if (userId) {
      dispatch(getUser(userId));
    }
  }, [userId]);

  useEffect(() => {
    if (userRole) {
      setRole(userRole);
    }
  }, [userRole]);

  useEffect(() => {
    if (role === 'admin') {
      navigate('/ads');
    } else if (role === 'user') {
      navigate('/');
    }
  }, [role]);

  useEffect(() => {
    setErMessage(authError);
  }, [authError]);

  const handlerErMessageInInput = (value:string) => {
    setErMessage(value);
  };

  const handler = () => {
    console.log(erMessage);

    if (!erMessage && enteredEmail && enteredPassword) {
      dispatch(login({ enteredEmail, enteredPassword }));
    }
  };

  return (
    <AuthPage handler={handler} trackEmail={trackEmail} trackPassword={trackPassword} erMessage={erMessage} handlerErMessageInInput={handlerErMessageInInput} />
  );
};

export default AuthContainer;
