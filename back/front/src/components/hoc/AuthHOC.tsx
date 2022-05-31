/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/storeHooks';
import { selectUserAuthorized, selectUserRegistered } from '../../store/slice/userSlice/userSlice';

const AuthHOC: React.FC = ({ children }) => {
  const userReg = useAppSelector(selectUserRegistered);
  const userAuth = useAppSelector(selectUserAuthorized);

  if (true) {
    return <>{children}</>;
  }

  return <Navigate to="/auth" />;
};

export default AuthHOC;
