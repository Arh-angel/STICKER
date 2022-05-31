import React from 'react';
import { useNavigate, useNavigationType, useParams } from 'react-router-dom';
import ProductPage from '../../components/pages/ProductPage';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';

const ProductContainer = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handlerBtnBack = () => {
    navigate(-1);
  };

  return (
    <ProductPage handlerBtnBack={handlerBtnBack} />
  );
};

export default ProductContainer;
