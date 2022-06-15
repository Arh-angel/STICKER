import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import MainPage from '../../components/pages/MainPage';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { IAd } from '../../models/IAd';
import { getAds, getCategoryAd, selectAds } from '../../store/slice/adsSlice/adsSlice';

const MainContainer = () => {
  const [ads, setAds] = useState<IAd[]>([]);

  const dispatch = useAppDispatch();
  const adsElementary = useAppSelector(selectAds);

  const { category } = useParams();

  console.log(category);

  useEffect(() => {
    dispatch(getAds);
    setAds(adsElementary);
  }, []);

  useEffect(() => {
    if (category === 'cars') {
      dispatch(getCategoryAd('Автомобили'));
    } else if (category === 'accessories') {
      dispatch(getCategoryAd('Аксессуары'));
    } else if (category === 'furniture') {
      dispatch(getCategoryAd('Мебель'));
    } else if (category === 'clothing') {
      dispatch(getCategoryAd('Одежда'));
    } else if (category === 'sport') {
      dispatch(getCategoryAd('Спорт'));
    } else if (category === 'technics') {
      dispatch(getCategoryAd('Техника'));
    } else if (category === 'forHome') {
      dispatch(getCategoryAd('Товары для дома'));
    } else {
      dispatch(getAds());
    }
  }, [category]);

  return (
    <MainPage ads={ads} />
  );
};

export default MainContainer;
