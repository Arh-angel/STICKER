import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import RegistrationPage from '../../components/pages/RegistrationPage';

import { selectUserEmail, selectUserFirstName, selectUserLastName, selectUserPassword, selectUserRegistered, userAuthorized, userRegistered, selectAgreementStatus, selectAuthorizationErrorStatus } from '../../store/slice/userSlice/userSlice';
import { registration } from '../../store/slice/authSlice/authSlice';

const RegistrationContainer = () => {
  const [pass, setPass] = useState('');
  const [repeatPass, setRepeatPass] = useState('');

  const [pasMatch, setPasMatch] = useState(false);

  const [erMessage, setErMessage] = useState('');

  const userName = useAppSelector(selectUserFirstName);
  const userLastName = useAppSelector(selectUserLastName);
  const userEmail = useAppSelector(selectUserEmail);
  const userPassword = useAppSelector(selectUserPassword);
  const userReg = useAppSelector(selectUserRegistered);
  const userAgreement = useAppSelector(selectAgreementStatus);
  const authorizationErrorStatus = useAppSelector(selectAuthorizationErrorStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const trackPas = (value:string) => {
    setPass(value);
  };

  const trackRepeatPas = (value:string) => {
    setRepeatPass(value);
  };

  useEffect(() => {
    if (pass.length > 0 && repeatPass.length > 0) {
      if (pass === repeatPass) {
        setPasMatch(true);
      } else {
        setPasMatch(false);
      }
    } else {
      setPasMatch(true);
    }
  }, [pass, repeatPass]);

  const setUserRegistered = async () => {
    if (userName && userLastName && userEmail && userPassword && userAgreement && pasMatch && !authorizationErrorStatus) {
      setErMessage('');
      dispatch(userRegistered(true));
      dispatch(userAuthorized(true));
      await dispatch(registration({ userName, userLastName, userEmail, userPassword }));
      navigate('/', { state: { userReg } });
    } else {
      setErMessage('Заполните обязательные поля');
      setTimeout(() => setErMessage(''), 5000);
    }
  };

  return (
    // eslint-disable-next-line max-len
    <RegistrationPage handler={setUserRegistered} trackPas={trackPas} trackRepeatPas={trackRepeatPas} pasMatch={pasMatch} erMessage={erMessage} />
  );
};

export default RegistrationContainer;
