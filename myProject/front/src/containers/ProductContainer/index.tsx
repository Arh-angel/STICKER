import React, { useEffect, useState } from 'react';
import { useNavigate, useNavigationType, useParams } from 'react-router-dom';
import ProductPage from '../../components/pages/ProductPage';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { IAd } from '../../models/IAd';
import { getAd, selectAd } from '../../store/slice/adsSlice/adsSlice';

const ProductContainer = () => {
  const adElementary = useAppSelector(selectAd);

  const [ad, setAd] = useState<IAd>(adElementary);

  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAd(id));
  }, [id]);

  const handlerBtnBack = () => {
    navigate(-1);
  };

  return (
    <ProductPage handlerBtnBack={handlerBtnBack} ad={ad} />
  );
};

export default ProductContainer;
