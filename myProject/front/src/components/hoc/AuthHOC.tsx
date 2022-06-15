/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/storeHooks';
import { selectUserId } from '../../store/slice/authSlice/authSlice';
import { selectUserAuthorized, selectUserRegistered } from '../../store/slice/userSlice/userSlice';

const AuthHOC: React.FC = ({ children }) => {
  const user = useAppSelector(selectUserId);

  if (true) {
    return <>{children}</>;
  }

  return <Navigate to="/auth" />;
};

export default AuthHOC;
