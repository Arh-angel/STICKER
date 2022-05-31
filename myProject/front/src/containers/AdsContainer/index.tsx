import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdsPage from '../../components/pages/AdsPage';

const AdsContainer = () => {
  const navigate = useNavigate();
  const handlerBtn = () => {
    navigate('/productEditing');
  };

  return (
    <AdsPage handlerBtn={handlerBtn} />
  );
};

export default AdsContainer;
