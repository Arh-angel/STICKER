import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductEditingPage from '../../components/pages/ProductEditingPage';

const ProductEditingContainer = () => {
  const navigate = useNavigate();

  const handlerBtnBack = () => {
    navigate('/ads');
  };

  return (
    <ProductEditingPage handlerBtnBack={handlerBtnBack} />
  );
};

export default ProductEditingContainer;
