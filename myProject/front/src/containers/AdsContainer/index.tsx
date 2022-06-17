import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdsPage from '../../components/pages/AdsPage';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { IAd } from '../../models/IAd';
import { getAds, getUserAds, selectAds } from '../../store/slice/adsSlice/adsSlice';
import { selectUserId } from '../../store/slice/authSlice/authSlice';
import { selectRole } from '../../store/slice/userSlice/userSlice';

const AdsContainer = () => {
  const [ads, setAds] = useState<IAd[]>([]);

  const userId = useAppSelector(selectUserId);

  const dispatch = useAppDispatch();
  const userRole = useAppSelector(selectRole);
  const navigate = useNavigate();
  const handlerBtn = () => {
    navigate('/ads/productEditing');
  };

  useEffect(() => {
    if (userRole === 'Админ') {
      dispatch(getAds());
    } else {
      dispatch(getUserAds(userId));
    }
  }, []);

  const currentAds = useAppSelector(selectAds);

  useEffect(() => {
    setAds(currentAds);
  }, []);

  return (
    <AdsPage handlerBtn={handlerBtn} dataAds={ads} />
  );
};

export default AdsContainer;
