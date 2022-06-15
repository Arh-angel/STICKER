import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductEditingPage from '../../components/pages/ProductEditingPage';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { IAd } from '../../models/IAd';
import { getAd, selectAd } from '../../store/slice/adsSlice/adsSlice';

const ProductEditingContainer = () => {
  const [dataAd, setDataAd] = useState<IAd>(Object);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const currentAd = useAppSelector(selectAd);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAd(id));
    setDataAd(currentAd);
  }, []);

  const handlerBtnBack = () => {
    navigate('/ads');
  };

  return (
    <ProductEditingPage handlerBtnBack={handlerBtnBack} dataAd={dataAd} />
  );
};

export default ProductEditingContainer;
