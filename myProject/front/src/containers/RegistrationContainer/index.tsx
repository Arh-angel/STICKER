import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import RegistrationPage from '../../components/pages/RegistrationPage';

import { clearErrorMessage, registration, selectAuthError, selectUserRole } from '../../store/slice/authSlice/authSlice';

const RegistrationContainer = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPass, setRepeatPass] = useState('');
  const [agreement, setAgreement] = useState(false);
  const [role, setRole] = useState('');

  const [pasMatch, setPasMatch] = useState(false);

  const [erMessage, setErMessage] = useState('');

  const authError = useAppSelector(selectAuthError);
  const userRole = useAppSelector(selectUserRole);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const trackName = (value:string) => {
    setName(value);
  };
  const trackLastName = (value:string) => {
    setLastName(value);
  };
  const trackEmail = (value:string) => {
    setEmail(value);
  };
  const trackPassword = (value:string) => {
    setPassword(value);
  };
  const trackRepeatPassword = (value:string) => {
    setRepeatPass(value);
  };
  const trackAgreement = (value:boolean) => {
    setAgreement(value);
  };

  useEffect(() => {
    dispatch(clearErrorMessage());
  }, []);

  useEffect(() => {
    if (password.length > 0 && repeatPass.length > 0) {
      if (password === repeatPass) {
        setPasMatch(true);
      } else {
        setPasMatch(false);
      }
    } else {
      setPasMatch(true);
    }
  }, [password, repeatPass]);

  useEffect(() => {
    if (userRole) {
      setRole(userRole);
    }
  }, [userRole]);

  useEffect(() => {
    if (role) {
      navigate('/');
    }
  }, [role]);

  useEffect(() => {
    setErMessage(authError);
  }, [authError]);

  const setUserRegistered = () => {
    if (name && lastName && email && password && pasMatch && agreement) {
      dispatch(registration({ name, lastName, email, password }));
    } else {
      setErMessage('Заполните обязательные поля');
      setTimeout(() => setErMessage(''), 5000);
    }
  };

  return (
    // eslint-disable-next-line max-len
    <RegistrationPage handler={setUserRegistered} trackPassword={trackPassword} trackRepeatPassword={trackRepeatPassword} trackName={trackName} trackLastName={trackLastName} trackEmail={trackEmail} trackAgreement={trackAgreement} pasMatch={pasMatch} erMessage={erMessage} />
  );
};

export default RegistrationContainer;
